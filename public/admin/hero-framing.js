(() => {
  const h = window.h;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  // Decap supplies the draft slide to its list renderer, including unsaved uploads.
  const NativeList = window.CMS.getWidget('list').control;
  class HeroSlides extends NativeList {
    constructor(props) {
      super(props);
      const renderNativeItem = this.renderItem;
      this.renderItem = (slide, index) => {
        const item = renderNativeItem(slide, index);
        const image = slide.get('image');
        const mobile = slide.get('mobileImageMode') === 'separate' ? slide.get('mobileImage') : image;
        const savedOverlay = slide.getIn(['framing', 'overlay']);
        const overlay = savedOverlay?.toJS?.() || savedOverlay || {};
        const asset = path => path ? 'url(' + JSON.stringify(String(this.props.getAsset(path))) + ')' : 'none';
        return h('div', {
          key: item.key,
          'data-hero-layer': overlay.mode || 'none',
          'data-hero-direction': overlay.direction || 'center',
          style: {
            display: 'contents',
            '--hero-desktop-image': asset(image),
            '--hero-mobile-image': asset(mobile),
            '--hero-layer-color': overlay.color || '#000000',
            '--hero-layer-opacity': (overlay.opacity ?? 40) / 100
          }
        }, item);
      };
    }
  }
  window.CMS.registerWidget('hero-slides', HeroSlides);

  const OverlayControl = window.createClass({
    render() {
      const value = this.props.value?.toJS?.() || this.props.value || {};
      const mode = value.mode || 'none';
      const opacity = value.opacity ?? 40;
      const change = (key, next) => this.props.onChange({ ...value, [key]: next });
      const select = (label, key, selected, options) => h('label', null, label,
        h('select', { value: selected, onChange: event => change(key, event.target.value) },
          options.map(([id, text]) => h('option', { key: id, value: id }, text))));
      return h('div', { className: 'hero-layer-controls' },
        select('효과', 'mode', mode, [['none', '없음'], ['solid', '단색'], ['gradient', '그라데이션']]),
        mode !== 'none' && h('label', null, '레이어 색상',
          h('input', { type: 'color', value: value.color || '#000000', onChange: event => change('color', event.target.value) })),
        mode !== 'none' && h('label', null, '불투명도 ' + opacity + '%',
          h('input', { type: 'range', min: 0, max: 100, value: opacity, onChange: event => change('opacity', Number(event.target.value)) })),
        mode === 'gradient' && select('색이 가장 진한 위치', 'direction', value.direction || 'center',
          [['center', '중앙'], ['top', '위'], ['bottom', '아래'], ['left', '왼쪽'], ['right', '오른쪽']])
      );
    }
  });
  window.CMS.registerWidget('hero-overlay', OverlayControl);
  const Control = window.createClass({
    getInitialState() { return { dragging: null }; },
    update(next) { this.props.onChange({ x: 50, y: 50, zoom: 1, ...(this.props.value?.toJS?.() || this.props.value || {}), ...next }); },
    start(event) {
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.setPointerCapture(event.pointerId);
      const value = this.props.value?.toJS?.() || this.props.value || {};
      this.setState({ dragging: { x: event.clientX, y: event.clientY, left: Number(value.x ?? 50), top: Number(value.y ?? 50) } });
    },
    move(event) {
      if (!this.state.dragging) return;
      event.preventDefault();
      event.stopPropagation();
      const box = event.currentTarget.getBoundingClientRect();
      this.update({ x: Math.round(clamp(this.state.dragging.left - (event.clientX - this.state.dragging.x) / box.width * 100, 0, 100)), y: Math.round(clamp(this.state.dragging.top - (event.clientY - this.state.dragging.y) / box.height * 100, 0, 100)) });
    },
    render() {
      const value = this.props.value?.toJS?.() || this.props.value || {};
      const x = Number(value.x ?? 50), y = Number(value.y ?? 50), zoom = Number(value.zoom ?? 1);
      const mobile = this.props.field.get('device') === 'mobile';
      return h('div', { style: { padding: 12, border: '1px solid #d5d9de', borderRadius: 6, background: '#f8f9fa' } },
        h('p', { style: { margin: '0 0 8px', fontSize: 13 } }, '사진을 드래그해서 중심을 맞추고, 아래에서 확대해 주세요. 원본 파일은 바뀌지 않습니다.'),
        h('div', { onPointerDown: this.start, onPointerMove: this.move, onPointerUp: event => { event.stopPropagation(); this.setState({ dragging: null }); }, onPointerCancel: () => this.setState({ dragging: null }), style: { position: 'relative', width: mobile ? 170 : '100%', maxWidth: 520, aspectRatio: mobile ? '9 / 16' : '16 / 9', overflow: 'hidden', background: '#d7dbe0', touchAction: 'none', cursor: 'grab', userSelect: 'none' } },
          h('div', { role: 'img', 'aria-label': mobile ? '모바일 이미지 구도' : 'PC 이미지 구도', style: { width: '100%', height: '100%', backgroundImage: mobile ? 'var(--hero-mobile-image)' : 'var(--hero-desktop-image)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: `${x}% ${y}%`, transform: `translate(${(50 - x) * (zoom - 1)}%, ${(50 - y) * (zoom - 1)}%) scale(${zoom})`, pointerEvents: 'none' } }),
          h('div', { className: 'hero-photo-layer', 'aria-hidden': true }),
          h('div', { style: { position: 'absolute', left: '50%', top: '50%', width: 18, height: 18, border: '1px solid white', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 0 1px #333', pointerEvents: 'none' } })
        ),
        h('label', { style: { display: 'block', marginTop: 10 } }, `확대 ${Math.round(zoom * 100)}% · 위치 가로 ${x}% / 세로 ${y}%`, h('input', { type: 'range', min: 1, max: 2, step: 0.05, value: zoom, onChange: event => this.update({ zoom: Number(event.target.value) }), style: { display: 'block', width: '100%', maxWidth: 520 } })),
        h('button', { type: 'button', onClick: () => this.update({ x: 50, y: 50, zoom: 1 }), style: { marginTop: 8, padding: '5px 10px' } }, '위치·확대 초기화')
      );
    }
  });
  window.CMS.registerWidget('hero-framing', Control);
})();

(() => {
  const h = window.h;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const Control = window.createClass({
    getInitialState() { return { image: '', dragging: null }; },
    componentDidMount() {
      fetch('/src/content/settings/home-hero.json').then(response => response.json()).then(data => this.setImage(data)).catch(() => {});
      this.receive = event => {
        this.setImage(event.detail);
      };
      window.addEventListener('callim-hero-entry', this.receive);
    },
    componentWillUnmount() { window.removeEventListener('callim-hero-entry', this.receive); },
    setImage(data) {
      const match = String(this.props.forID || '').match(/slides[^0-9]*(\d+)/);
      const slide = data?.slides?.[Number(match?.[1] || 0)];
      if (slide?.image) this.setState({ image: this.props.field.get('device') === 'mobile' && slide.mobileImageMode === 'separate' && slide.mobileImage ? slide.mobileImage : slide.image });
    },
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
          this.state.image ? h('img', { src: this.state.image, draggable: false, style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: `${x}% ${y}%`, transform: `translate(${(50 - x) * (zoom - 1)}%, ${(50 - y) * (zoom - 1)}%) scale(${zoom})`, pointerEvents: 'none' } }) : h('span', { style: { padding: 12, display: 'block' } }, '이미지를 선택하면 미리보기가 표시됩니다.'),
          h('div', { style: { position: 'absolute', left: '50%', top: '50%', width: 18, height: 18, border: '1px solid white', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 0 1px #333', pointerEvents: 'none' } })
        ),
        h('label', { style: { display: 'block', marginTop: 10 } }, `확대 ${Math.round(zoom * 100)}% · 위치 가로 ${x}% / 세로 ${y}%`, h('input', { type: 'range', min: 1, max: 2, step: 0.05, value: zoom, onChange: event => this.update({ zoom: Number(event.target.value) }), style: { display: 'block', width: '100%', maxWidth: 520 } })),
        h('button', { type: 'button', onClick: () => this.update({ x: 50, y: 50, zoom: 1 }), style: { marginTop: 8, padding: '5px 10px' } }, '위치·확대 초기화')
      );
    }
  });
  window.CMS.registerWidget('hero-framing', Control);
})();

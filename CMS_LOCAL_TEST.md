# Decap 콘텐츠 연결 현황

2026-10-15 기준. 홈페이지 CSS와 상세 템플릿은 유지하고 입력 데이터를 JSON으로 분리했다.

- Portfolio: Branding 1개, Package 1개, Project 3개. 기존 상세 템플릿별로 새 글 추가·수정 양식을 제공한다.
- Products: 기존 상품 9개. 분류·제목·소개·썸네일·연도·대표 여부·크기·키워드·구매 링크 편집.
- Journals: 기존 글 7개를 상세 템플릿별로 이전. 기존 2장 공통 신규 양식도 유지한다.
- 콘텐츠 JSON: src/content/portfolio/<template>/*.json, src/content/journals/<template>/*.json, src/content/products/*.json.
- 기존 공개 주소와 순서는 유지한다. 새로운 상세 글은 자동 파일명을 사용한다.
- 기존 사진 원본은 그대로 두고 CMS에서 선택 가능한 동일 바이트 복사본을 public/media/existing/의 기존 분류·글 폴더에 저장했다. 이번 작업은 미사용 이미지 삭제를 포함하지 않는다.
- 관리자 미리보기는 기존 상세 컴포넌트와 상품 상세 모달을 사용한다.
- 운영 GitHub 인증 확인 완료. AdGuard가 로그인 창을 차단했던 환경에서는 해당 사이트를 차단 제외해야 한다.
- GitHub에서 삭제한 테스트 글을 최신 삭제 기록으로 로컬에도 반영했다. 테스트 이미지 정리 자동화는 보류한다.

검증: 기존 상세 12개의 클래스·스타일·애니메이션 속성 일치, 기존 사진 파일 바이트 일치, 글·상품 개수, 인증 검사, TypeScript, 배포 빌드 통과.

아직 미확인: 확장된 관리자 UI의 실제 새 글 저장·사진 첨부·미리보기·게시·삭제, PC/모바일 화면 육안 비교. 코드 검사만으로 실제 화면 확인을 완료했다고 표시하지 않는다.

메뉴 정리 후 콘텐츠 경로: src/content/portfolio/branding/*.json, package/*.json, project/*.json 및 src/content/journals/*.json. 상세 양식은 layout 배열의 단일 항목 type으로 유지한다. 관리자 왼쪽 Portfolio 제목 아래 네 분류를 표시하고 Journals는 별도 항목으로 둔다. 접기·펼치기는 이번 변경에 포함하지 않는다.

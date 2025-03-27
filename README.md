# 🎬 My Movie App

TMDb API 기반으로 영화 및 TV 시리즈 정보를 검색하고, 즐겨찾기 기능과 Firebase 기반 회원 인증 기능을 제공하는 React 사이드 프로젝트입니다.

---

## 🚀 주요 기능

- 🔍 영화 및 TV 시리즈 검색
- 🎞️ 영화 상세 정보 보기 (예고편 포함)
- 📺 TV 시리즈 상세 보기 (시즌 및 에피소드 정보)
- 👤 Firebase Authentication 기반 회원가입 / 로그인 (이메일, GitHub)
- ⭐ 즐겨찾기 추가 및 관리

---

## 🛠 기술 스택

- **프론트엔드**: React (Vite + TypeScript)
- **상태관리**: Zustand
- **스타일링**: styled-components
- **인증 및 백엔드 서비스**: Firebase Authentication
- **외부 API**: The Movie Database (TMDb)

---

## 📦 설치 및 실행

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev
```

---

## 📁 폴더 구조

```
src/
├── api/         # TMDb API 요청 관련 함수
├── assets/      # 이미지, 아이콘 등 정적 자산
├── components/  # 공통 UI 컴포넌트
├── firebase/    # Firebase 설정 및 유틸
├── hooks/       # 커스텀 React Hooks
├── lib/         # 공통 유틸 함수 모음
├── pages/       # 페이지별 컴포넌트
├── store/       # Zustand 상태 관리
├── styles/      # styled-components 글로벌 스타일 등
├── types/       # 타입 정의 (TypeScript)
└── utils/       # 포맷터, 헬퍼 함수 등 유틸
```

---

## 📸 데모 (선택)

> 배포 후 URL이나 주요 화면 스크린샷을 여기에 추가할 수 있어요.

---

## 📄 라이선스

> (MIT 또는 Apache-2.0 등의 메뉴에 따른 명시 가능)

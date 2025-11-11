# 일취월Chat (Kiwoom Chat)

피그마 디자인을 기반으로 구현한 리액트 채팅 애플리케이션입니다.

## 프로젝트 구조

```
kiwoom-chat/
├── src/
│   ├── components/          # 공통 컴포넌트
│   │   ├── StatusBar.tsx    # 상단 상태바
│   │   ├── HeaderBar.tsx    # 헤더 바
│   │   ├── Button.tsx       # 버튼 컴포넌트
│   │   ├── MessageBubble.tsx # 메시지 버블
│   │   ├── DictCard.tsx     # 도감 카드
│   │   ├── BingoCell.tsx    # 빙고 칸
│   │   ├── ReminderPopup.tsx # Reminder 팝업
│   │   └── BingoPopup.tsx   # Bingo 팝업
│   ├── screens/             # 화면 컴포넌트
│   │   ├── Home.tsx         # 홈 화면
│   │   ├── Intro.tsx        # 인트로 화면
│   │   ├── CharacterSelection.tsx # 캐릭터 선택 화면
│   │   ├── Chat.tsx         # 채팅 화면
│   │   └── Dict.tsx         # 도감 화면
│   ├── App.tsx              # 메인 App 컴포넌트
│   ├── main.tsx             # 진입점
│   └── index.css            # 글로벌 스타일
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## 주요 기능

- **홈 화면**: 투자 대시보드 및 주가 정보
- **인트로 화면**: 챗봇 소개 및 선택
- **캐릭터 선택**: 입문자형/베테랑형 선택
- **채팅 화면**: 키우미와의 대화 (스크롤 가능)
- **도감 화면**: 키워드별 질문 확인 (스크롤 가능)
- **Reminder 팝업**: 도감에서 키워드 클릭 시 상세 정보 표시
- **Bingo 팝업**: 도감에서 빙고 게임

## 기술 스택

- React 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8
- React Router DOM 6.20.0

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 화면 크기

- 모바일 뷰: 402px × 874px
- 배경: 진한 회색 (#878686)
- 스크롤: Chat, Dict, Reminder 팝업 내부에만 적용

## 스타일링

- 테일윈드 없이 TSX 기반 인라인 스타일 사용
- 반응형 디자인 고려
- 피그마 디자인 1:1 구현

## 백엔드 연결

백엔드 API 연결을 위해 각 컴포넌트에서 API 호출 함수를 추가할 수 있습니다.


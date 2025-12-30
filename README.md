# 개발환경
- **React**: 18.2.0 (TypeScript)
- **State/Routing**: Redux Toolkit, React Router 6.30.2
- **Build Tool**: Vite 5.x
- **Package Manager**: pnpm 9.x
- **Runtime**: Node.js 20.19.6
- **MUI (Material UI)**<br><br><br>

# 설치 및 실행
<pre>
<code>
pnpm install //패키지 설치

pnpm dev //개발서버 실행
</code>
</pre>
사이트 접속  :  http://localhost:5173<br><br><br>


# 프로젝트 구성
## 📁 App
`app`은 애플리케이션의 전역 환경(App Infrastructure)을 담당합니다.  
React 앱을 실행하기 위해 필요한 설정과 Provider를 한 곳에 모아두는 역할을 합니다.<br><br>
`구조`<br>
app/<br>
 ├─ AppProvider.tsx     # 모든 전역 Provider를 조합<br>
 ├─ store.ts         # Redux store 설정<br>
 └─ hooks.ts         # typed hooks (useAppDispatch 등)<br>

## 📁 Routes
`routes`는 애플리케이션의 라우팅 구조만을 정의하는 영역입니다.  
URL ↔ Page 매핑과 라우팅 규칙을 관리하는 역할을 담당합니다.

## 📁 Components
`components`는 **비즈니스 도메인과 무관한 공통 UI 컴포넌트**를 관리하는 폴더입니다.  
Redux, API, 특정 도메인(Project, Invoice 등)에 대한 의존성이 없으며 props 기반으로 동작하는 **재사용 가능한 UI 블록**만 포함합니다. 

### 📌 구성 원칙
- 컴포넌트는 **도메인 지식 없이 재사용 가능**해야 합니다.
- 상태 관리(Redux) 및 API 호출 로직은 포함하지 않습니다.
- 비즈니스 로직이 필요한 경우 `features` 영역에서 컴포넌트를 조합하여 사용합니다.
- 파일명은 `PascalCase`, 폴더명은 `lowercase`를 사용합니다.

## 📁 Features
`features`는 **실제 비즈니스 도메인 단위의 기능 묶음**을 관리하는 폴더입니다.  
하나의 feature는 **화면(UI) + 상태 관리(Redux) + 비즈니스 로직**을 함께 포함합니다.

### 📌 구성 원칙
- 하나의 feature는 **하나의 비즈니스 도메인**을 담당합니다.
- feature 내부에서는 `components`, `store`, `services` 등을 자유롭게 가질 수 있습니다.
- 다른 feature의 내부 구현에 직접 의존하지 않습니다.
- 공통 UI는 `components/`에서 가져와 사용합니다.
- Redux slice는 feature 단위로 분리합니다.

`구조`<br>
features/<br>
├─ projects/<br>
│ ├─ components/<br>
│ │ ├─ ProjectTable.tsx # 프로젝트 전용 테이블<br>
│ │ └─ ProjectTableControls.tsx # 프로젝트 전용 검색/필터/정렬<br>
│ ├─ store/<br>
│ │ ├─ projectsSlice.ts # Redux slice<br>
│ │ └─ projectsThunk.ts # 비동기 로직 (API 호출)<br>
│ ├─ hooks/<br>
│ │ └─ useProjects.ts # 프로젝트 관련 커스텀 훅<br>
│ ├─ services/<br>
│ │ └─ projects.api.ts # 프로젝트 API 정의<br>
│ └─ types.ts # 프로젝트 도메인 타입<br>

### 🔄 components vs features 역할 구분

| 구분 | components | features |
|----|----|----|
| 목적 | 공통 UI 재사용 | 비즈니스 기능 구현 |
| Redux 사용 | ❌ | ✅ |
| API 호출 | ❌ | ✅ |
| 도메인 의존 | ❌ | ✅ |
| 재사용 범위 | 전역 | 특정 기능 |

## 📁 Pages
`pages`는 **라우팅 단위의 화면 구성 레이어**입니다.  
각 파일은 하나의 URL(페이지)에 대응하며,  
**비즈니스 로직을 직접 가지지 않고 feature 컴포넌트들을 조합하는 역할**을 합니다.

### 📌 역할 정의
- Layout(PageLayout, Sidebar, Topbar) 적용
- Feature 컴포넌트 조합<br><br>

Pages에서는 다음을 **지양**합니다
- Redux slice 정의
- API 직접 호출
- 비즈니스 로직 처리<br><br><br>

# Material UI
### CSS 약어
| 약어 | CSS 속성 | 설명 |
| :--- | :--- | :--- |
| **m** | `margin` | 상하좌우 전체 바깥 여백 |
| **mt** | `margin-top` | 위쪽 바깥 여백 |
| **mb** | `margin-bottom` | 아래쪽 바깥 여백 |
| **ml** | `margin-left` | 왼쪽 바깥 여백 |
| **mr** | `margin-right` | 오른쪽 바깥 여백 |
| **mx** | `margin-left`, `right` | 좌우(X축) 바깥 여백 |
| **my** | `margin-top`, `bottom` | 상하(Y축) 바깥 여백 |
| **p** | `padding` | 상하좌우 전체 안쪽 여백 |
| **pt** | `padding-top` | 위쪽 안쪽 여백 |
| **pb** | `padding-bottom` | 아래쪽 안쪽 여백 |
| **pl** | `padding-left` | 왼쪽 안쪽 여백 |
| **pr** | `padding-right` | 오른쪽 안쪽 여백 |
| **px** | `padding-left`, `right` | 좌우(X축) 안쪽 여백 |
| **py** | `padding-top`, `bottom` | 상하(Y축) 안쪽 여백 |

### Icon
https://mui.com/material-ui/material-icons/?query=close<br/><br/>  

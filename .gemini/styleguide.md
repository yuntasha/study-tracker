# Airbnb React + TypeScript Style Guide

> 본 문서는 Airbnb React/JSX Style Guide를 기준으로 **현대 React(Hooks 중심)** 와 **TypeScript(.tsx)** 환경에 맞게 조정한 가이드입니다. 클래스 기반/구식 API는 최소화하고 함수 컴포넌트와 훅 사용을 기본 전제로 합니다.

---

## 목차

1. [기본 규칙](#기본-규칙)
2. [컴포넌트 형태: Function vs Class](#컴포넌트-형태-function-vs-class)
3. [믹스인](#믹스인)
4. [명명 규칙](#명명-규칙)
5. [선언](#선언)
6. [정렬](#정렬)
7. [따옴표](#따옴표)
8. [띄어쓰기](#띄어쓰기)
9. [속성(props)](#속성props)
10. [참조(refs)](#참조refs)
11. [괄호](#괄호)
12. [태그](#태그)
13. [메소드/이벤트 핸들러](#메소드이벤트-핸들러)
14. [컴포넌트 내부 순서](#컴포넌트-내부-순서)
15. [`isMounted`](#ismounted)
16. [타입 선언 규칙](#타입-선언-규칙)
17. [파일/폴더 구조](#파일폴더-구조)
18. [ESLint/Prettier/TSConfig 권장](#eslintprettiertsconfig-권장)

---

## 기본 규칙

* **파일당 하나의 공개(기본) 컴포넌트**를 둡니다.

  * 단, 같은 파일 안에 소규모 **순수 프레젠테이셔널 보조 컴포넌트**(stateless) 몇 개는 허용합니다. (ESLint: `react/no-multi-comp` 에서 stateless는 예외 설정)
* **항상 JSX/TSX 문법**을 사용합니다. `React.createElement` 직접 호출은 피합니다.
* TypeScript를 사용하므로 컴포넌트 파일 확장자는 **`.tsx`** 를 기본으로 합니다.

## 컴포넌트 형태: Function vs Class

* **기본값은 함수 컴포넌트 + Hooks** 입니다. 상태, 사이드이펙트, 컨텍스트 등은 `useState`, `useReducer`, `useEffect`, `useMemo`, `useCallback`, `useRef`, `useContext` 등을 사용합니다.
* 클래스 컴포넌트는 **레거시 코드 유지보수**나 특정 사유(에러 바운더리 등)에서만 사용합니다.
* 상태/refs가 **없는** 단순 컴포넌트는 **일반 함수 선언식**을 선호합니다. (화살표/익명보다 **이름이 있는 함수**를 권장 — 스택 트레이스 및 디버깅 용이)

```tsx
// ✅ 좋음: 상태가 없는 프레젠테이셔널 컴포넌트
export function Listing({ hello }: { hello: string }) {
  return <div>{hello}</div>;
}

// ✅ 좋음: 상태가 있는 경우에도 함수 + Hooks
type Props = { initial: number };
export function Counter({ initial }: Props) {
  const [count, setCount] = useState(initial);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}

// ⚠️ 지양: 새 코드에서 클래스는 가급적 피함
class LegacyCounter extends React.Component<{ initial: number }, { count: number }> {
  state = { count: this.props.initial };
  render() { return <div>{this.state.count}</div>; }
}
```

## 믹스인

* **믹스인은 사용하지 않습니다.**

  * 암묵적 의존성, 네이밍 충돌, 복잡도 증가를 야기합니다. 고차 컴포넌트(HOC)·커스텀 훅·유틸 모듈로 대체하세요.

## 명명 규칙

* **확장자**: 컴포넌트 파일은 **`.tsx`**.
* **파일 이름**: **파스칼케이스**(PascalCase) 사용. 예) `ReservationCard.tsx`.
* **컴포넌트/JSX 참조 변수**: 컴포넌트는 PascalCase, 인스턴스/변수는 **카멜케이스**(camelCase).
* **폴더 루트 컴포넌트**: `components/ReservationCard/index.tsx` 처럼 `index.tsx`를 두고 **폴더명 = 컴포넌트명**으로 import 단순화.
* **HOC/커스텀 훅 명명**: HOC는 `withXxx`, 훅은 `useXxx`. HOC는 `Wrapped.displayName`을 이용해 `withXxx(WrappedName)` 형태의 `displayName`을 부여.

```tsx
// ✅ 올바른 import
import ReservationCard from './ReservationCard';

// ✅ HOC displayName 예시
export function withFoo<P>(Wrapped: React.ComponentType<P>) {
  function WithFoo(props: P) { return <Wrapped {...props} />; }
  const name = Wrapped.displayName || Wrapped.name || 'Component';
  WithFoo.displayName = `withFoo(${name})`;
  return WithFoo;
}
```

## 선언

* 함수 컴포넌트는 **함수 이름 자체가 컴포넌트 이름**입니다. 별도의 `displayName` 지정은 필요 시에만.
* 클래스 사용 시에도 `export default class ComponentName ...` 처럼 **정의부에서 이름을 부여**합니다.
* **PropTypes는 사용하지 않습니다.** (TypeScript 타입이 대체) — 외부 라이브러리 소비 시 보조적으로만 고려.

## 정렬

* 여러 props를 가지면 **줄바꿈 정렬**을 사용합니다. 닫는 꺾쇄 `>` 는 새 줄에 고정.

```tsx
// ✅
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// ✅ 자식은 들여쓰기
<Foo>
  <Bar />
</Foo>

// ✅ props가 하나면 한 줄 허용
<Foo active />
```

## 따옴표

* JSX 속성에는 **쌍따옴표(`"`)**, 일반 TS 문자열에는 **홑따옴표(`'`)**를 사용합니다. (ESLint: `jsx-quotes`)

```tsx
// ✅
<Foo label="Hello" />
const name = 'world';

// ✅ 스타일 객체 내 문자열은 TS 문자열 규칙을 따름
<div style={{ left: '20px' }} />
```

## 띄어쓰기

* **셀프 클로징 전 공백 하나**를 유지합니다. `<Foo />`
* JSX 중괄호 내부는 **공백을 넣지 않습니다.** `{value}` (ESLint: `react/jsx-curly-spacing`)

```tsx
// ✅
<Foo />
<Foo label={text} />
```

## 속성(props)

* 속성 이름은 **카멜케이스**. DOM 속성은 React 명세에 맞게(`className`, `htmlFor`, `onClick`).
* boolean 속성은 **값 생략**을 권장: `<Button disabled />` (ESLint: `react/jsx-boolean-value`)
* **키(`key`)는 안정적이고 유니크한 값**을 사용합니다. 배열 인덱스 사용은 지양합니다.
* 접근성: `<img>`는 항상 `alt`를 갖습니다. 장식용이면 `alt=""` 또는 `role="presentation"`.
* `role`은 **유효하고 비추상**인 ARIA role만 사용합니다.
* `accessKey`는 사용하지 않습니다.

```tsx
// ✅ key는 안정 ID 사용
{todos.map((t) => (
  <TodoRow key={t.id} todo={t} />
))}
```

## 참조(refs)

* **문자열 ref는 금지**, **콜백 ref** 또는 `useRef` 훅을 사용합니다.
* TypeScript에서는 **정확한 제네릭 타입**을 지정합니다.

```tsx
// ✅ useRef + 타입
const inputRef = useRef<HTMLInputElement | null>(null);

// ✅ 콜백 ref
<input ref={(el) => { inputRef.current = el; }} />
```

## 괄호

* JSX가 **두 줄 이상**이면 **괄호로 감쌉니다**. (ESLint: `react/wrap-multilines`)

```tsx
return (
  <Card title="Long">
    <Content />
  </Card>
);
```

## 태그

* 자식이 없으면 **셀프 클로징**을 사용합니다: `<Foo />` (ESLint: `react/self-closing-comp`)
* 복수 props일 때 닫힘 꺾쇄는 **새 줄**에 둡니다. (ESLint: `react/jsx-closing-bracket-location`)

## 메소드/이벤트 핸들러

* 클래스가 아닌 **함수 컴포넌트** 기준:

  * 핸들러는 `handleXxx`, 콜백 props는 `onXxx` 컨벤션을 따릅니다.
  * 성능 이슈가 있는 곳에서만 `useCallback`으로 **안정 참조**를 제공합니다. 무분별한 `useCallback`은 지양.
  * **렌더 시 생성되는 인라인 함수**는 성능/의미상 문제가 될 때만 최적화합니다. 우선 **가독성**을 고려.

```tsx
export function ItemList({ items, onPick }: { items: Item[]; onPick: (id: string) => void }) {
  const handleClick = (id: string) => onPick(id);
  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>
          <button type="button" onClick={() => handleClick(it.id)}>
            {it.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
```

> 참고: 클래스 컴포넌트 사용 시엔 `constructor`에서 바인드하거나 클래스 필드 화살표 문법을 사용합니다. (새 코드에선 비권장)

## 컴포넌트 내부 순서

함수 컴포넌트 권장 순서:

1. **모듈 상수/유틸** (파일 상단)
2. **타입/인터페이스**
3. **컴포넌트 선언부**

   1. `props`/`context`/`state` 관련 훅 (`useState`, `useReducer`, `useContext`)
   2. 파생 값(`useMemo`)
   3. 핸들러(`useCallback`)
   4. 이펙트(`useEffect`, `useLayoutEffect`)
   5. 렌더용 파생 JSX/함수
   6. **return(JSX)**

클래스 컴포넌트(레거시) 순서(요약): `static` → `constructor` → lifecycle → 핸들러 → 렌더 헬퍼 → `render`.

## `isMounted`

* 사용하지 않습니다. 함수 컴포넌트에서는 **정리 함수(clean-up)** 와 **정적 플래그 ref**로 비동기 안전성을 확보합니다.

```tsx
useEffect(() => {
  let alive = true;
  fetchData().then((res) => { if (alive) setData(res); });
  return () => { alive = false; };
}, []);
```

## 타입 선언 규칙

* **Props/State 타입은 인터페이스 또는 타입 별칭**으로 정의. 외부 노출이 있는 경우 인터페이스 선호.
* **이벤트 타입**은 React 제공 타입 사용: `React.MouseEvent<HTMLButtonElement>`, `React.ChangeEvent<HTMLInputElement>` 등.
* **children**은 가급적 명시적으로 받되, 필요 시 `React.ReactNode` 사용.
* 기본값은 **기본 파라미터**로 처리합니다. 함수 컴포넌트에서 `defaultProps`는 지양.
* `React.FC`/`VFC`는 **선택적**: 장점(암묵적 children)보다 제약(제네릭/기본값) 이슈가 있을 수 있어 **명시적 props 타입 + 함수 선언**을 권장.

```tsx
type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({ children, disabled = false, onClick }: ButtonProps) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
```

## 파일/폴더 구조

* **도메인/기능 단위**로 묶고, 각 컴포넌트 폴더에는 관련 파일을 근접 배치합니다.

  * `Component.tsx`, `Component.test.tsx`, `Component.styles.ts`(또는 CSS Modules), `types.ts`, `hooks.ts`, `index.ts` 등.
* **배럴 파일(`index.ts`)**로 외부 공개 표면을 최소/명확화합니다.

## ESLint/Prettier/TSConfig 권장

* **ESLint 플러그인**:

  * `@typescript-eslint/eslint-plugin`
  * `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`
* **핵심 규칙 예시**:

  * `react/jsx-boolean-value`: true 생략
  * `react/jsx-curly-spacing`: 중괄호 공백 금지
  * `react/jsx-no-useless-fragment`: 불필요한 `<> </>` 금지
  * `react-hooks/rules-of-hooks` & `react-hooks/exhaustive-deps`: 훅 규칙
  * `@typescript-eslint/consistent-type-imports`: 타입 전용 import
  * `@typescript-eslint/no-misused-promises`: 이벤트 핸들러 async 주의
* **Prettier**를 포맷터로 사용하고 ESLint와 충돌 규칙은 끕니다(`eslint-config-prettier`).
* **TSConfig** 최소 권장:

  * `"strict": true`, `"noImplicitAny": true`, `"noUncheckedIndexedAccess": true`
  * `"jsx": "react-jsx"` (신규 JSX 트랜스폼)
  * `"moduleResolution": "bundler"`(도구 체인에 따라)

---

### 부록: 접근성 체크포인트

* 컨트롤은 **키보드 포커스 가능**해야 하며 `aria-*` 속성은 시맨틱에 맞춰 사용.
* 이미지 대체 텍스트, 폼 레이블(`label`/`htmlFor`), 라이브 영역, 적절한 역할/속성.

### 부록: 성능 팁

* **메모화는 비용-편익 고려**: `useMemo`/`useCallback`은 재연산/재생성 비용이 의미있을 때만.
* 리스트는 `key` 안정성 최우선, `React.memo`는 프리미티브 props 위주에 효과적.

---

이 가이드는 팀 상황에 맞게 조정 가능합니다. 규칙은 **일관성**과 **가독성**, **접근성**, **성능**의 균형을 목표로 합니다.

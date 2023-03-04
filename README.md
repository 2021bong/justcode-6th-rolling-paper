<div align='center'>

# ✉️ JUSTCODE 6기 롤링페이퍼

<br />

![JUSTCODE 6기 롤링페이퍼 썸네일](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbaMzID%2FbtrPS04foyh%2F70xDRMGrYrpOnThFgQCFB1%2Fimg.png)

마지막으로 서로에게 하고 싶은 말을 전하는

JUSTCODE 6기를 위한 롤링 페이퍼 토이 프로젝트입니다.

좋은 아이디어 주신 **JUSTCODE 6기 정예원**님 감사합니다😀

<br />

## [⭐️모두에게 롤링페이퍼 쓰러 가기](https://justcode-6th-rolling-paper.vercel.app/)

<br />
<br />

---

<br />
<br />

</div>

## ⚙️ 파일 구조 및 사용 기술

<br />

<img src="https://img.shields.io/badge/Vite-646CFF??style=flat&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/React.js-61DAFB??style=flat&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6??style=flat&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28??style=flat&logo=firebase&logoColor=white"/>

<br />

```
├── .env
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── letter.svg
├── src
│   ├── Home.tsx
│   ├── Router.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── board
│   │   │   ├── Board.tsx
│   │   │   ├── Detail.style.ts
│   │   │   ├── Detail.tsx
│   │   │   └── NameCard.tsx
│   │   └── write
│   │       ├── Write.style.ts
│   │       └── Write.tsx
│   ├── styles
│   │   ├── GlobalStyle.ts
│   │   └── theme.ts
│   └── utils
│       ├── color.ts
│       └── name.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

<br />
<br />
<br />

## ⚙️ 프로젝트 실행 방법

<br />

1. 프로젝트를 클론 받습니다.

```
git clone https://github.com/2021bong/justcode-6th-rolling-paper.git
```

<br />

2. 클론 받은 프로젝트 폴더로 들어가 디펜던시 패키지를 설치합니다.

```
cd justcode-6th-rollling-paper

npm i
```

<br />

3. 프로젝트를 실행합니다.

```
npm run dev
```

<br />

4. 해당 주소에서 프로젝트를 확인할 수 있습니다.

```
http://localhost:5173/justcode-6th-rollling-paper/
```

<br />
<br />

---

<br />
<br />

<div align='center'>

## 💝 구현 화면

<p style='color: grey'>* 반응형 구현도 완료하여 모바일에서도 이용 가능합니다. 👍</p>

<br />
<br />

#### **1️⃣ 메인 화면**

<br />
<img width="880" alt="메인 화면" src="https://user-images.githubusercontent.com/49029756/198963337-9dbcb066-ed5b-44ad-b793-7d57a7bc7492.png">

<br />
<br />
<br />

#### **2️⃣ 롤링페이퍼 작성 화면**

<br />
<img width="876" alt="롤링페이퍼 작성 화면" src="https://user-images.githubusercontent.com/49029756/198963339-5d8bb409-a54a-4729-ae4c-fccb4b392488.png">
저스트코드 6기와 멘토에게 롤링페이퍼를 작성할 수 있습니다.
<br />
표시될 이름은 내가 원하는 데로 작성할 수 있으나 기존에 존재하는 이름과 동일한 이름으로 작성하면 기존의 메세지에 덮어씌워집니다.

<br />
<br />
<br />

#### **3️⃣ 롤링페이퍼 목록 화면**

<br />

<img width="852" alt="롤링페이퍼 보기 목록 화면" src="https://user-images.githubusercontent.com/49029756/198963342-59c28f9a-8d86-4d06-ac37-ac63661eba74.png">

저스트코드 6기와 멘토에게 작성된 롤링페이퍼를 확인할 수 있습니다.
<br />
원하는 사람의 이름을 클릭해 확인 가능합니다.

<br />
<br />
<br />

#### **4️⃣ 롤링페이퍼 디테일 화면**

<br />

<img width="1111" alt="롤링페이퍼 디테일 화면" src="https://user-images.githubusercontent.com/49029756/198963326-3c3dcb88-6dd1-400c-994e-ead7af8a4f3d.png">

받은 롤링페이퍼를 확인할 수 있습니다. 받은 롤링페이퍼가 없다면 롤링페이퍼가 없다는 화면을 보여줍니다. <br />

</div>

/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.webp, 2.webp, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "김현종",
    nameEn: "Groom",
    father: "김용호",
    mother: "위하순",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "소성연",
    nameEn: "Bride",
    father: "소영춘",
    mother: "이동심",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-13",
    time: "12:30",
    venue: "더 청담 웨딩홀",
    hall: "노블레스홀",
    address: "서울특별시 강남구 도산대로 434 2층",
    tel: "02-518-8001"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "**현**명한 짝을 만나\n**종**일 웃음으로 함께한 시간 속에서\n서로를 향한 마음을 키워왔습니다.\n\n**성**심을 다해 서로를 아끼고\n**연**약한 순간까지 함께 보듬으며\n인생의 동반자가 되어 살아가겠습니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "가장 빛나던 여름의 절정에 만나\n여름의 초입에서 새로운 길을 함께 걸어가려 합니다."
  },

 // ── 5. 오시는 길 ──
mapLinks: {
  kakao: "https://kko.to/F1iwyHoWCX",
  naver: "https://naver.me/xk1nUsjb"
},
transportation: {
  parking: [
    "건물 옥외/지하 주차장 200대 주차 가능",
    "만차 시 외부 400대 주차 가능 (무료 발렛 서비스)",
    "2시간 무료 주차, 이후 10분당 1,000원"
  ],
  subway: [
    { line: "7호선", station: "강남구청역", exit: "4번출구", walk: "도보 10분", note: "셔틀버스 무료 운행 중 (연속 운행)" },
    { line: "수인분당선", station: "압구정로데오역", exit: "4번출구", walk: "도보 7분", note: "" }
  ]
},

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김현종", bank: "국민은행", number: "820801-04-104569" },
      { role: "아버지", name: "김용호", bank: "국민은행", number: "009-21-1260-681" },
      { role: "어머니", name: "위하순", bank: "농협은행", number: "100083-56-156682" }
    ],
    bride: [
      { role: "신부", name: "소성연", bank: "신한은행", number: "110-413-196321" },
      { role: "아버지", name: "소영춘", bank: "하나은행", number: "179-18-03799-3" },
      { role: "어머니", name: "이동심", bank: "NH농협은행", number: "302-2580-9928-81" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김현종 ♥ 소성연 결혼합니다",
    description: "2026년 6월 13일, 소중한 분들을 초대합니다."
  }
};

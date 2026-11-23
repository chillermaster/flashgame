/* ============================================================
   게임 목록 (이 파일만 고치면 포털이 바뀌어요)
   ------------------------------------------------------------
   ▶ 게임 추가: 아래 GAMES 안에 { ... }, 한 덩어리를 복사해서 붙여넣기
   ▶ 필드 설명
     title : 게임 이름
     sub   : 한 줄 설명 (없으면 "" 로 두기)
     tags  : 장르·키워드. 여러 개 가능. GENRES 에 있는 태그는 위쪽 탭에도 뜸
             예) tags: ["카드","보드게임","추리"]  → 카드 탭, 보드게임 탭 두 곳 모두에 나옴
     post  : 블로그 글 번호 (todaylunch.tistory.com/번호). 아직 안 올렸으면 0
     play  : 게임 iframe 주소 (GitHub Pages). 없으면 ""
     verify: 점수검증기 주소. 없으면 ""
     new   : true 면 NEW 표시
     soon  : true 면 "준비중" 표시 (post/play 를 채우면 soon 은 지우기)
   ▶ 주의: 각 줄 끝의 쉼표(,)와 따옴표(")를 지우지 마세요
   ============================================================ */

window.SITE = {
  title: "오늘의 점심 내기 · 게임 모음",
  desc: "브라우저에서 바로 즐기는 중세 판타지 웹게임",
  blog: "https://todaylunch.tistory.com/",
  pages: "https://chillermaster.github.io/flashgame/"   // 게임 파일이 올라가는 주소
};

// 위쪽 탭 순서 (여기에 적은 태그만 탭으로 나와요)
window.GENRES = ["디펜스","슈팅","액션","퍼즐","카드","보드게임","전략","롤플레잉","일반"];

window.GAMES = [
  /* ---------- 블로그에 올라간 게임 (최신순) ---------- */
  { title:"대항해 해전 : 마지막 깃발", sub:"16세기 바다 위에서 펼쳐지는 함선 배틀로얄", tags:["슈팅","해전","배틀로얄"], post:44, play:"last-flag.html", verify:"last-flag-verify.html", new:true },
  { title:"콜로세움 : 검투사들의 맹세", sub:"콜로세움에서 벌이는 검투사 결투", tags:["액션","대전","로마"], post:43, play:"colosseum.html", verify:"colosseum-verify.html", new:true },
  { title:"미드나잇 원카드", sub:"바텐더가 주는 서비스가 게임의 룰을 바꾼다", tags:["카드","4인","미드나잇"], post:42, play:"midnight-onecard.html", verify:"midnight-onecard-verify.html", new:true },
  { title:"푸르츠 벨 러쉬", sub:"5개의 과일을 맞춰라", tags:["카드","반응속도","4인"], post:41, play:"fruit-bell-rush.html", verify:"fruit-bell-rush-verify.html", new:true },
  { title:"3D장기 : 초한쟁패", sub:"유방 vs 항우, 초한지 장기", tags:["퍼즐","보드게임","전략","장기","초한지"], post:40, play:"chohan-janggi.html", verify:"chohan-janggi-verify.html", new:true },
  { title:"딥 마린 : 심해포격전", sub:"바다 속 포트리스 게임", tags:["슈팅","잠수함"], post:37, play:"deep_marine.html", verify:"deep_marine_verify.html" },
  { title:"검 강화하기 : 어이쿠 손이 미끄러졌네", sub:"+100 강화에 도전하는 확률 게임", tags:["일반","성장","확률"], post:36, play:"sword-enhance.html", verify:"sword-enhance-verify.html" },
  { title:"수호탑 사성결계", sub:"커넥트4와 마법사의 돌", tags:["퍼즐","보드게임","전략","로웬","2인"], post:35, play:"rowen-tower.html", verify:"rowen-tower-verify.html" },
  { title:"로웬 포커 디펜스 : 운명패 방위전", sub:"패 조합으로 직업을 뽑는 포커 디펜스", tags:["디펜스","카드","로웬"], post:34, play:"rowen-poker.html", verify:"rowen-poker-verify.html" },
  { title:"로웬 결계 방어전 : 뭉친 유닛 디펜스", sub:"좁은 우리에 몰려드는 유닛을 막아라", tags:["디펜스","로웬"], post:33, play:"rowen-ward.html", verify:"rowen-ward-verify.html" },
  { title:"로웬 왕좌전", sub:"중세 판타지 체스. 국가전을 제대로 담았다", tags:["퍼즐","보드게임","전략","체스","로웬"], post:32, play:"rowen-chess.html", verify:"rowen-chess-verify.html" },
  { title:"로웬 빙설전 : 스노우 크래프트", sub:"얼음 마법으로 벌이는 눈싸움 대전", tags:["액션","대전","로웬"], post:31, play:"rowen_snowcraft.html", verify:"rowen_snowcraft_verify.html" },
  { title:"3D 로웬 오셀로 : 로웬 마도 제국", sub:"마법사들이 지켜보는 3D 오셀로", tags:["퍼즐","보드게임","전략","오셀로","로웬","2인"], post:30, play:"rowen-othello.html", verify:"rowen-othello-verify.html" },
  { title:"3D 고누", sub:"적이 움직이지 못하게 경로를 봉쇄하여 제압하는 전통 보드게임", tags:["퍼즐","보드게임","전략","고누","2인"], post:29, play:"gonu.html", verify:"gonu-verify.html" },
  { title:"용이되고픈뱀", sub:"어디까지 길어지는 거에요?", tags:["액션","생존"], post:28, play:"claude_snake.html", verify:"claude_snake_verify.html" },
  { title:"로웬 서바이버즈", sub:"중세 판타지 뱀서라이크! 30분을 버티고 마왕을 무찌르자", tags:["디펜스","액션","생존","로웬"], post:27, play:"rowen-survivors.html", verify:"rowen-survivors-verify.html" },
  { title:"로웬 방위전", sub:"성을 향해 쳐들어오는 악마들을 무찌르는 타워 디펜스", tags:["디펜스","로웬","중세판타지"], post:26, play:"rowen-bastion.html", verify:"rowen-bastion-verify.html" },
  { title:"화살비 3D", sub:"방해물 사이를 피해 달려가는 게임", tags:["액션","회피","3D"], post:25, play:"arrow_rain_3d.html", verify:"arrow_rain_3d_verify.html" },
  { title:"아르카나 서클", sub:"마법진을 그려 몰려오는 악마를 막아라", tags:["퍼즐","마법진","중세판타지"], post:24, play:"arcana-circle.html", verify:"arcana-circle-verify.html" },
  { title:"룬헥스 원정기", sub:"중세 판타지 지뢰찾기", tags:["퍼즐","지뢰찾기","중세판타지"], post:23, play:"runehex.html", verify:"runehex-verify.html" },
  { title:"아발론 브레이커", sub:"중세 판타지 벽돌깨기", tags:["슈팅","벽돌깨기","중세판타지"], post:22, play:"avalon-breaker.html", verify:"avalon-breaker-verifier.html" },
  { title:"열혈 월드 피구", sub:"\"볼이 내가 된다\" 대륙을 돌며 피구로 세계 제패", tags:["액션","스포츠","도트"], post:21, play:"world_dodge.html", verify:"world_dodge_verify.html" },
  { title:"블리츠 아레나", sub:"제한된 시간 내에 적을 쓸어담는 서바이벌", tags:["슈팅","서바이벌"], post:20, play:"blitz_arena.html", verify:"blitz_arena_verify.html" },
  { title:"몽글팝 3D", sub:"같은 동물끼리 뭉치고 pop pop!", tags:["퍼즐","연쇄","동물"], post:19, play:"mongle_pop.html", verify:"mongle_pop_verify.html" },
  { title:"환무(幻武)", sub:"무한 콤보로 이어지는 액션게임", tags:["액션","콤보"], post:18, play:"hwanmu.html", verify:"hwanmu_verify.html" },
  { title:"길 건너 마왕성", sub:"마왕을 무찌르는 여정을 떠나보자", tags:["액션","중세판타지"], post:17, play:"kingdom_crossing.html", verify:"kingdom_crossing_verify.html" },
  { title:"아발론 스트라이커", sub:"횡스크롤 비행슈팅액션게임", tags:["슈팅","도트","중세판타지"], post:15, play:"avalon-striker.html", verify:"avalon-striker-verifier.html" },
  { title:"성운 핀볼 (Nebula Pinball)", sub:"우주 기믹이 가득한 3D 핀볼", tags:["슈팅","핀볼","3D"], post:14, play:"nebula_pinball.html", verify:"" },
  { title:"석양의 총잡이", sub:"당신의 동체시력은 CPU를 이길 수 있을까", tags:["슈팅","반응속도"], post:13, play:"sunset_gunslinger_v4.html", verify:"sunset_gunslinger_verify.html" },
  { title:"월드아쿠아", sub:"배를 타고 낚시하고 세계로 나아가자", tags:["롤플레잉","낚시","성장","3D"], post:12, play:"WorldAqua_Integrated_v1.7.html", verify:"" },
  { title:"큐브팝", sub:"같은 색상의 블럭을 한 번에 많이 터뜨리는 게임", tags:["퍼즐"], post:10, play:"cube_pop.html", verify:"cube_pop_verify.html" },
  { title:"창공의 기사단", sub:"종스크롤 슈팅게임", tags:["슈팅","종스크롤"], post:8, play:"aether-wings-game.html", verify:"aether-wings-verifier.html" },
  { title:"흔들흔들 균형왕", sub:"균형을 잡아라 (Balance Game)", tags:["액션"], post:4, play:"balance-game.html", verify:"" },
  { title:"화살피하기", sub:"징집병으로 시작하여 성벽의 전설까지", tags:["액션","회피"], post:3, play:"arrow_rain.html", verify:"arrow_rain_verify.html" },
  { title:"폰에서 왕까지 (2048)", sub:"견습기사에서 왕까지", tags:["퍼즐","2048"], post:1, play:"royal_merge.html", verify:"royal_merge_verify.html" },

  /* ---------- 아직 블로그에 안 올린 게임 (post:0) ---------- */
  { title:"사보타지 : 황금 갱도", sub:"광부와 배신자가 섞여 황금을 캐는 갱도 게임", tags:["카드","보드게임","추리"], post:0, play:"gold-tunnel.html", verify:"gold-tunnel-verify.html" },
  { title:"미드나잇 라운지 21 (블랙잭)", sub:"4인 블랙잭, 목표 금액을 먼저 채워라", tags:["카드","4인"], post:0, play:"midnight-21.html", verify:"midnight-21-verify.html", soon:true },
  { title:"로웬 달무티 : 맹약의 서열전", sub:"8인 서열 카드게임", tags:["카드","전략","로웬"], post:0, play:"rowen-dalmuti.html", verify:"rowen-dalmuti-verify.html" },
  { title:"로웬 프리셀", sub:"52장 모두 도트 초상화로 그린 프리셀", tags:["카드","퍼즐","로웬"], post:0, play:"rowen-freecell.html", verify:"rowen-freecell-verify.html", soon:true },
  { title:"마피아 : 모닥불 재판", sub:"11인 직업 랜덤 마피아 추리 게임", tags:["전략","보드게임","추리"], post:0, play:"mafia-campfire.html", verify:"mafia-campfire-verify.html" },
  { title:"철인 3종", sub:"수영·자전거·달리기를 좌우 번갈아 눌러 달리는 8인 레이스", tags:["액션","대전","레이스"], post:0, play:"iron-triathlon.html", verify:"iron-triathlon-verify.html" },
  { title:"미끼를 조심해", sub:"미끼를 피해 물고기를 먹고 자라는 생존 게임", tags:["액션","생존","3D"], post:0, play:"bait-dodger.html", verify:"bait-dodger-verify.html" },
  { title:"정화의 플라스크", sub:"로웬 마나 정화전 · VS AI", tags:["전략","로웬"], post:0, play:"rowen-flask.html", verify:"rowen-flask-verify.html" },
  { title:"로웬 : 황혼의 가면", sub:"해와 달의 맹약이 깨진 밤, 국왕의 연회장에서", tags:["로웬"], post:0, play:"rowen-masks.html", verify:"rowen-masks-verify.html" },
  { title:"맹약의 깃발", sub:"로웬 용병단 오토배틀 토너먼트", tags:["전략","오토배틀","로웬"], post:0, play:"rowen-mercenary.html", verify:"rowen-mercenary-verify.html" },
  { title:"설산의 봉인", sub:"4직업 5챕터 설산 원정 횡스크롤 액션", tags:["액션","롤플레잉","중세판타지"], post:0, play:"", verify:"", soon:true }
];

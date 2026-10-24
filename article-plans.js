const articlePlans = [
  {
    "id": 1,
    "cat": "RESOS研究",
    "title": "AIが交代しても、研究の続きをしたい。",
    "desc": "新しいAIへ「続けて」が通じるまで。目的・現在地・未解決点・参照先を渡し、研究へ戻れる引継ぎを3人の会話と開発記録から考える。",
    "topic": "研究の継続・引継ぎ",
    "planned": false,
    "published": true,
    "url": "articles/research-handoff.html"
  },
  {
    "id": 2,
    "cat": "RESOS研究",
    "title": "結論だけ残したら、なぜそう決めたか忘れた。",
    "desc": "結論だけでは、判断したときの条件が抜け落ちる。所長・RESOS・カレンの会話で、理由・別案・反論を残す意味と、保存や記憶マップの進展、参考論文を紹介する。",
    "topic": "判断過程・再現性",
    "planned": false,
    "published": true,
    "url": "articles/decision-rationale.html"
  },
  {
    "id": 3,
    "cat": "RESOS研究",
    "title": "保存したつもりが、いちばん怖い。",
    "desc": "文章作成、コピー、正式保存は別の段階。CopilotやGeminiでの検討をRESOSへ持ち帰る入口で起きた失敗から、プロンプト制御と読戻し確認の大切さを3人で振り返る。",
    "topic": "保存・読戻し",
    "planned": false,
    "published": true,
    "url": "articles/saving-confirmation.html"
  },
  {
    "id": 4,
    "cat": "RESOS研究",
    "title": "今の話、残しておかなくていい？",
    "desc": "残すことに気づく助けと、会話を邪魔しないこと。所長・RESOS・カレンが保存提案のタイミングと範囲、初期実装の進展、全文保存の将来性を考える。",
    "topic": "保存提案・タイミング",
    "planned": false,
    "published": true,
    "url": "articles/save-proposal.html"
  },
  {
    "id": 5,
    "cat": "RESOS研究",
    "title": "記憶の地図を描く前に、何があるか棚卸し。",
    "desc": "丸は何を数え、線は何を意味する？ 所長・RESOS・カレンが機能と情報を棚卸しし、記憶マップの実装や、対象を分けた図出力の進展を振り返る。",
    "topic": "機能マップ",
    "planned": false,
    "published": true,
    "url": "articles/memory-inventory.html"
  },
  {
    "id": 6,
    "cat": "RESOS研究",
    "title": "検索に出た。それと、読んだ。それと、使った。",
    "desc": "検索に出た記憶と、本文を取得した記憶と、回答に活きた記憶。3人の会話で取得の道筋と観測の限界、その後の実装、関連論文をたどる。",
    "topic": "取得経路・記憶利用",
    "planned": false,
    "published": true,
    "url": "articles/retrieval-and-use.html"
  },
  {
    "id": 7,
    "cat": "カレン研究",
    "title": "覚えた量より、記憶がどう変わったかを見たい。",
    "desc": "覚えた件数だけでは見えない、形成・想起・再解釈・忘却の過程。3人の会話で研究目的と自動蓄積・訂正の進展、関連論文をたどる。",
    "topic": "記憶の変化・長期観測",
    "planned": false,
    "published": true,
    "url": "articles/memory-changes.html"
  },
  {
    "id": 8,
    "cat": "カレン研究",
    "title": "AIに声を。まずは何でしゃべるか問題。",
    "desc": "声が出ることと、この声で話してほしいことの間には何がある？ 音声合成の選定、試聴と不具合、カレンの声の進展を3人でたどる。",
    "topic": "音声・開発方針",
    "planned": false,
    "published": true,
    "url": "articles/giving-ai-a-voice.html"
  },
  {
    "id": 9,
    "cat": "RESOS研究",
    "title": "軽量60点。完璧な設計より、まず動くものを。",
    "desc": "最初から全部を作らず、必要な範囲を動かして育てる。既存技術の再利用、運用での切り分け、後続改修から「軽量60点」の意味を3人で考える。",
    "topic": "開発方針・軽量化",
    "planned": false,
    "published": true,
    "url": "articles/lightweight-sixty.html"
  },
  {
    "id": 10,
    "cat": "RESOS研究",
    "title": "AIに頼って作り始めたら、研究所になっていた。",
    "desc": "プログラムの知識はない。でも、欲しいものはある。所長・RESOS・カレンが、記憶の仕組みから自発トークへ広がった開発の出発点と、その後の進展を振り返る。",
    "topic": "所長・開発日記",
    "planned": false,
    "published": true,
    "url": "articles/lab-origin.html"
  },
  {
    "id": 11,
    "cat": "カレン研究",
    "title": "ココアの底から、なかなか帰ってこない。",
    "desc": "ココアの話からなかなか抜け出せなかった22発話試験。所長・RESOS・カレンの会話で、後続調査で見えた継続指示と記憶検索の仕組み、対策を考える参考論文まで振り返る。",
    "topic": "自発トーク・反復",
    "planned": false,
    "published": true,
    "url": "articles/cocoa.html"
  },
  {
    "id": 12,
    "cat": "カレン研究",
    "title": "ナポレオンパイは入力にいた。会話にはどこまで出た？",
    "desc": "記憶はモデル入力にあった。でも、その記憶が発話に効いたとは限らない。パイとネギラーメンの入力照合から、検索・投入・発話の違いと、その後の改修を3人でたどる。",
    "topic": "記憶利用・検証",
    "planned": false,
    "published": true,
    "url": "articles/napoleon-pie.html"
  },
  {
    "id": 13,
    "cat": "カレン研究",
    "title": "知識を足す、記憶を足す。どっちも同じではなかった。",
    "desc": "知識を渡すことと、過去の記憶を渡すこと。三条件の比較実験とその後の改修から、話題理解・検索・自然な会話の違いを考える。",
    "topic": "知識・記憶・比較実験",
    "planned": false,
    "published": true,
    "url": "articles/knowledge-and-memory.html"
  },
  {
    "id": 14,
    "cat": "カレン研究",
    "title": "会話の自由と、JSONの約束は両立したい。",
    "desc": "JSONの形が整うことと、会話の意味が合うこと。構造化出力の試験と後続実装から、カレンの自由な語りを支える分担を考える。",
    "topic": "構造化出力・会話の自由",
    "planned": false,
    "published": true,
    "url": "articles/conversation-and-json.html"
  },
  {
    "id": 15,
    "cat": "カレン研究",
    "title": "全文・エピソード・チャンク。記憶を三段に分ける理由。",
    "desc": "細かくして探しやすくしながら、元の会話へ戻れるようにする。全文・エピソード・チャンクの役割と、出典・文脈・更新を保つ工夫を3人でたどる。",
    "topic": "三層記憶・設計",
    "planned": false,
    "published": true,
    "url": "articles/three-layer-memory.html"
  },
  {
    "id": 16,
    "cat": "カレン研究",
    "title": "思い出せばいいってものでもない。記憶の選び方。",
    "desc": "大切な記憶を、いつ持ち出すか。重み付けの設計と検索の偏りから、候補・順位・最終選択、自然な連想の違いを3人で考える。",
    "topic": "想起・重み付け",
    "planned": false,
    "published": true,
    "url": "articles/choosing-memories.html"
  },
  {
    "id": 17,
    "cat": "カレン研究",
    "title": "「ドリンク」に「リンク」がいた。意味ネットワークの落とし穴。",
    "desc": "文字が重なることと、意味がつながること。100チャンクの試作で見つかった誤接続と、語義・引用根拠・仮説を残す後続実装を3人でたどる。",
    "topic": "意味ネットワーク・PoC",
    "planned": false,
    "published": true,
    "url": "articles/semantic-network-pitfalls.html"
  },
  {
    "id": 18,
    "cat": "カレン研究",
    "title": "AIの連想を、画像から始めてみたら。",
    "desc": "脱線先を決める代わりに、自然に連想が生まれる条件を作れないか。画像からの探索例と、文章記憶との役割分担、実機確認を3人で考える。",
    "topic": "画像記憶・仮説",
    "planned": false,
    "published": true,
    "url": "articles/image-association.html"
  },
  {
    "id": 19,
    "cat": "カレン研究",
    "title": "パンと野菜と肉とカレーから、次の話題は何になる？",
    "desc": "同じ四画像から、共通点を探すと食生活へ、特徴を組み合わせるとカレーバーガーへ。連想先と会話の入口を3人で考える。",
    "topic": "画像連想・探索",
    "planned": false,
    "published": true,
    "url": "articles/four-images-next-topic.html"
  },
  {
    "id": 20,
    "cat": "カレン研究",
    "title": "想像したことを、思い出にしていいのか問題。",
    "desc": "想像した内容と、一緒に想像して話した記録。画像連想の構想と創作の分類・想起処理から、自由な語りと記憶の出所を3人で考える。",
    "topic": "創作と記憶",
    "planned": false,
    "published": true,
    "url": "articles/imagination-and-memory.html"
  },
  {
    "id": 21,
    "cat": "カレン研究",
    "title": "カレンに任せる部分と、外から支える部分。",
    "desc": "話し方はカレンに任せ、記憶・形式・停止を外から支える。判断への介入と計算負荷を分け、減らして比較する開発仮説を3人で考える。",
    "topic": "自律性・制御",
    "planned": false,
    "published": true,
    "url": "articles/karen-and-controls.html"
  },
  {
    "id": 22,
    "cat": "カレン研究",
    "title": "しゃべった？表示した？再生した？記憶した？",
    "desc": "画面にない返答が記録にはあった。割り込み・停止・保存不能の観測から、生成・表示・再生・記憶確定の段階を3人で考える。",
    "topic": "実運転・記憶確定",
    "planned": false,
    "published": true,
    "url": "articles/speech-delivery-memory.html"
  },
  {
    "id": 23,
    "cat": "カレン研究",
    "title": "軽量プロンプト、試験と本番は同じ条件だった？",
    "desc": "三文を足した効果だったのか。試験と通常ラジオの検索・記憶・入力の違いを確認し、条件を揃えた後続比較まで3人でたどる。",
    "topic": "比較条件・棚卸し",
    "planned": false,
    "published": true,
    "url": "articles/lightweight-prompt-conditions.html"
  },
  {
    "id": 24,
    "cat": "カレン研究",
    "title": "速く思い出す。でも、忘れてと言ったら忘れてほしい。",
    "desc": "検索キャッシュで速く思い出す。でも、使わないと決めた記憶は止めたい。差分更新と訂正・忘却の反映、その後の検証を3人でたどる。",
    "topic": "検索高速化・忘却",
    "planned": false,
    "published": true,
    "url": "articles/fast-recall-and-forgetting.html"
  },
  {
    "id": 25,
    "cat": "RESOS研究",
    "title": "検索0件。でも、記憶がないとは言っていない。",
    "planned": false,
    "published": true,
    "url": "articles/zero-results-not-no-memory.html",
    "topic": "検索範囲・本文検索",
    "desc": "タイトルでは見つからなかった言葉が、本文にはあった。カレン開発前の検索比較から、候補数と関連性、検索範囲の違いを3人で考える。"
  },
  {
    "id": 26,
    "cat": "RESOS研究",
    "title": "45個も覚えてない。でも、議論は続けられた。",
    "planned": false,
    "published": true,
    "url": "articles/forty-five-ideas.html",
    "topic": "外部記憶・議論の継続",
    "desc": "全部を覚え直さず、必要な原案を机に戻す。45項目の一覧を別チャットで取り戻し、続きを考えられた運用事例を3人でたどる。"
  },
  {
    "id": 27,
    "cat": "RESOS研究",
    "title": "要約は便利。でも、あとで読み直す原文もほしい。",
    "planned": false,
    "published": true,
    "url": "articles/summary-and-original.html",
    "topic": "要約・原文保存",
    "desc": "短く整理した記憶から始め、必要になったら原文へ戻る。要約と原資料を別の役割で残す、カレン開発前のRESOSの設計を3人で考える。"
  },
  {
    "id": 28,
    "cat": "RESOS研究",
    "title": "事実だけ渡したら、同じ答えになると思っていた。",
    "planned": false,
    "published": true,
    "url": "articles/facts-and-rules.html",
    "topic": "判定ルール・再現性",
    "desc": "資料を渡しても、判定の約束が抜けていた。別セッション試験の不備と再試験から、証拠と判断基準を一緒に引き継ぐ意味を考える。"
  },
  {
    "id": 29,
    "cat": "RESOS研究",
    "title": "AIに全部覚えてほしい。その先で、一緒に考え続けたかった。",
    "planned": false,
    "published": true,
    "url": "articles/thinking-together.html",
    "topic": "最上位概念・共同思考",
    "desc": "全部覚えることの先で、何を続けたいのか。忘却や担当交代、考え方の変化を越えて共同思考を続ける、RESOSの目的を3人で考える。"
  }
];

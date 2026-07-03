const STORAGE_KEYS = {
    prices: "jim-mechanic-desk.prices.v2",
    selections: "jim-mechanic-desk.selections.v2",
    colorGuide: "jim-mechanic-desk.color-guide.v1",
    colorGuideSeedVersion: "jim-mechanic-desk.color-guide.seed-version.v1",
    notes: "jim-mechanic-desk.notes.v1",
};

const IMAGE_BASE = "./images/";
const currencyFormatter = new Intl.NumberFormat("ja-JP");

const ITEM_LIBRARY = {
    spoiler: { label: "Vehicle Spoiler", labelJa: "スポイラー", icon: `${IMAGE_BASE}spoiler.png` },
    bumper: { label: "Vehicle Bumper", labelJa: "バンパー", icon: `${IMAGE_BASE}bumper.png` },
    skirts: { label: "Vehicle Skirts", labelJa: "スカート", icon: `${IMAGE_BASE}skirts.png` },
    exhaust: { label: "Vehicle Exhaust", labelJa: "マフラー", icon: `${IMAGE_BASE}exhaust.png` },
    hood: { label: "Vehicle Hood", labelJa: "ボンネット", icon: `${IMAGE_BASE}hood.png` },
    roof: { label: "Vehicle Roof", labelJa: "ルーフ", icon: `${IMAGE_BASE}roof.png` },
    customplate: { label: "Customized Plates", labelJa: "ナンバープレート", icon: `${IMAGE_BASE}plate.png` },
    externals: { label: "Exterior Cosmetics", labelJa: "外装パーツ", icon: `${IMAGE_BASE}mirror.png` },
    rollcage: { label: "Roll Cage", labelJa: "ロールケージ", icon: `${IMAGE_BASE}rollcage.png` },
    internals: { label: "Internal Cosmetics", labelJa: "内装パーツ", icon: `${IMAGE_BASE}internals.png` },
    seat: { label: "Seat Cosmetics", labelJa: "シート", icon: `${IMAGE_BASE}seat.png` },
    livery: { label: "Livery Roll", labelJa: "ラッピング", icon: `${IMAGE_BASE}livery.png` },
    paintcan: { label: "Vehicle Paint Can", labelJa: "車両塗装缶", icon: `${IMAGE_BASE}spraycan.png` },
    rims: { label: "Custom Wheel Rims", labelJa: "ホイール", icon: `${IMAGE_BASE}rims.png` },
    tint_supplies: { label: "Window Tint Kit", labelJa: "フィルムキット", icon: `${IMAGE_BASE}tint_supplies.png` },
};

const BILLING_TIER_COLUMNS = ["LL1", "LL2", "LL3", "LL4", "LL5"];

const BILLING_TIER_ROWS = [
    { group: "engine", label: "エンジン", icon: `${IMAGE_BASE}engine5.png`, cells: ["engine1", "engine2", "engine3", "engine4", "engine5"] },
    { group: "transmission", label: "トランスミッション", icon: `${IMAGE_BASE}transmission4.png`, cells: ["transmission1", "transmission2", "transmission3", "transmission4", null] },
    { group: "suspension", label: "サスペンション", icon: `${IMAGE_BASE}suspension5.png`, cells: ["suspension1", "suspension2", "suspension3", "suspension4", "suspension5"] },
    { group: "brakes", label: "ブレーキ", icon: `${IMAGE_BASE}brakes3.png`, cells: ["brakes1", "brakes2", "brakes3", "brakes4", null] },
    { group: "oilp", label: "オイルポンプ", icon: `${IMAGE_BASE}oilp3.png`, cells: ["oilp1", "oilp2", "oilp3", null, null] },
    { group: "drives", label: "ドライブシャフト", icon: `${IMAGE_BASE}drives3.png`, cells: ["drives1", "drives2", "drives3", null, null] },
    { group: "cylind", label: "シリンダーヘッド", icon: `${IMAGE_BASE}cylind3.png`, cells: ["cylind1", "cylind2", "cylind3", null, null] },
    { group: "fueltank", label: "燃料タンク", icon: `${IMAGE_BASE}fueltank3.png`, cells: ["fueltank1", "fueltank2", "fueltank3", null, null] },
    { group: "cables", label: "バッテリーケーブル", icon: `${IMAGE_BASE}cables3.png`, cells: ["cables1", "cables2", "cables3", null, null] },
];

const BILLING_FIXED_ITEMS = [
    { id: "car_armor", label: "アーマー", icon: `${IMAGE_BASE}car_armour.png` },
    { id: "turbo", label: "ターボ", icon: `${IMAGE_BASE}turbo.png` },
    { id: "nos_new", label: "ニトロ新規", icon: `${IMAGE_BASE}nos.png` },
    { id: "nos_replace", label: "ニトロ交換", icon: `${IMAGE_BASE}nos.png` },
    { id: "harness", label: "ハーネス", icon: `${IMAGE_BASE}harness.png` },
    { id: "antilag", label: "アンチラグ", icon: `${IMAGE_BASE}antilag.png` },
    { id: "drifttires", label: "ドリフトタイヤ", icon: `${IMAGE_BASE}drifttires.png` },
    { id: "manual", label: "マニュアルギア", icon: `${IMAGE_BASE}manual.png` },
    { id: "ducttape", label: "ダクトテープ", icon: `${IMAGE_BASE}bodyrepair.png`, quantityEnabled: true },
    { id: "paint_can_supply", label: "車両塗装缶", icon: `${IMAGE_BASE}spraycan.png`, quantityEnabled: true },
    { id: "underglow_controller", label: "ネオンコントローラー", icon: `${IMAGE_BASE}underglow_controller.png` },
    { id: "cleaningkit", label: "クリーニングキット", icon: `${IMAGE_BASE}cleaningkit.png` },
];

const EXTERIOR_SLOT_IDS = Array.from({ length: 15 }, (_, index) => `exterior_custom_${index + 1}`);
const PAINT_SLOT_IDS = Array.from({ length: 9 }, (_, index) => `paint_custom_${index + 1}`);

const DEFAULT_PRICES = {
    engine1: 500000,
    engine2: 600000,
    engine3: 750000,
    engine4: 900000,
    engine5: 1000000,
    transmission1: 500000,
    transmission2: 600000,
    transmission3: 750000,
    transmission4: 900000,
    suspension1: 500000,
    suspension2: 600000,
    suspension3: 750000,
    suspension4: 900000,
    suspension5: 1000000,
    brakes1: 500000,
    brakes2: 600000,
    brakes3: 750000,
    brakes4: 900000,
    oilp1: 500000,
    oilp2: 600000,
    oilp3: 750000,
    drives1: 500000,
    drives2: 600000,
    drives3: 750000,
    cylind1: 500000,
    cylind2: 600000,
    cylind3: 750000,
    fueltank1: 500000,
    fueltank2: 600000,
    fueltank3: 750000,
    cables1: 500000,
    cables2: 600000,
    cables3: 750000,
    car_armor: 18000000,
    turbo: 3000000,
    nos_new: 2500000,
    nos_replace: 1200000,
    harness: 3000000,
    antilag: 3000000,
    drifttires: 1000000,
    manual: 1000000,
    ducttape: 200000,
    paint_can_supply: 150000,
    underglow_controller: 200000,
    cleaningkit: 100000,
    exterior_custom_unit: 100000,
    paint_custom_unit: 50000,
};

const BILLING_DECORATION_ICONS = {
    tier: `${IMAGE_BASE}tires.png`,
    fixed: `${IMAGE_BASE}toolbox.png`,
    exterior: `${IMAGE_BASE}mirror.png`,
    paint: `${IMAGE_BASE}spraycan.png`,
};

const QUANTITY_ENABLED_ITEMS = new Set(
    BILLING_FIXED_ITEMS.filter((item) => item.quantityEnabled).map((item) => item.id)
);

const WHITE_PASS_EXCLUDED_ITEMS = new Set([
    "nos_replace",
    "ducttape",
    "paint_can_supply",
    "underglow_controller",
    "cleaningkit",
]);

const BILLING_ITEM_META = buildBillingItemMeta();
const KNOWN_SELECTION_IDS = new Set(Object.keys(BILLING_ITEM_META));

const ORDER_CATEGORY_RULES = [
    { aliases: ["spoilers", "スポイラー"], billingBucket: "exterior", requiredItemKey: "spoiler" },
    { aliases: ["front bumpers", "フロントバンパー"], billingBucket: "exterior", requiredItemKey: "bumper" },
    { aliases: ["rear bumpers", "リアバンパー"], billingBucket: "exterior", requiredItemKey: "bumper" },
    { aliases: ["skirts", "スカート"], billingBucket: "exterior", requiredItemKey: "skirts" },
    { aliases: ["exhausts", "マフラー"], billingBucket: "exterior", requiredItemKey: "exhaust" },
    { aliases: ["grilles", "グリル"], billingBucket: "exterior", requiredItemKey: "bumper" },
    { aliases: ["hoods", "ボンネット"], billingBucket: "exterior", requiredItemKey: "hood" },
    { aliases: ["left fender", "左フェンダー"], billingBucket: "exterior", requiredItemKey: "skirts" },
    { aliases: ["right fender", "右フェンダー"], billingBucket: "exterior", requiredItemKey: "skirts" },
    { aliases: ["roof", "ルーフ"], billingBucket: "exterior", requiredItemKey: "roof" },
    { aliases: ["plate holders", "ナンバープレートホルダー"], billingBucket: "exterior", requiredItemKey: "customplate" },
    { aliases: ["vanity plates", "バニティプレート"], billingBucket: "exterior", requiredItemKey: "customplate" },
    { aliases: ["trim a", "トリムa"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["trim b", "トリムb"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["trunks", "トランク"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["engine blocks", "エンジンブロック"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["air filters", "エアフィルター"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["engine strut", "エンジンストラット"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["arch covers", "アーチカバー"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["roll cages", "ロールケージ"], billingBucket: "exterior", requiredItemKey: "rollcage" },
    { aliases: ["ornaments", "オーナメント"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["dashboards", "ダッシュボード"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["dials", "メーター"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["door speakers", "ドアスピーカー"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["seats", "シート"], billingBucket: "exterior", requiredItemKey: "seat" },
    { aliases: ["steering wheels", "ステアリングホイール"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["shifter levers", "シフトレバー"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["plaques", "プレート"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["speakers", "スピーカー"], billingBucket: "exterior", requiredItemKey: "internals" },
    { aliases: ["hydraulics", "油圧装置"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["aerials", "アンテナ"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["fuel tanks", "燃料タンク"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["wheels", "back wheels", "戻る wheels", "フロントホイール", "リアホイール"], billingBucket: "exterior", requiredItemKey: "rims" },
    { aliases: ["plate", "ナンバープレート"], billingBucket: "exterior", requiredItemKey: "customplate" },
    { aliases: ["window tints", "ウィンドウの色合い"], billingBucket: "exterior", requiredItemKey: "tint_supplies" },
    { aliases: ["extras", "エクストラ"], billingBucket: "exterior", requiredItemKey: "externals" },
    { aliases: ["wrap", "wraps", "livery", "liveries", "ラッピング"], billingBucket: "exterior", requiredItemKey: "livery" },
    { aliases: ["primary", "メインカラー"], billingBucket: "paint", requiredItemKey: "paintcan" },
    { aliases: ["secondary", "サブカラー"], billingBucket: "paint", requiredItemKey: "paintcan" },
    { aliases: ["pearlescent", "パール"], billingBucket: "paint", requiredItemKey: "paintcan" },
    { aliases: ["wheel", "ホイール", "ホイールカラー"], billingBucket: "paint", requiredItemKey: "paintcan" },
    { aliases: ["dashboard", "ダッシュボードカラー"], billingBucket: "paint", requiredItemKey: "paintcan" },
    { aliases: ["interior", "内装", "内装カラー"], billingBucket: "paint", requiredItemKey: "paintcan" },
];

const ORDER_RULE_LOOKUP = buildOrderRuleLookup();

const PALETTE_CATEGORIES = ["半グレ", "ギャング"];

const PALETTE_FINISH_OPTIONS = ["純正", "クラシック", "マット", "メタリック", "メタル", "カメレオン"];

const PALETTE_DETAIL_MODES = ["jm", "rgb", "hex"];
const PALETTE_SWATCH_CODE_MODES = ["hex", "rgb"];

const PALETTE_DETAIL_FIELD_CONFIGS = [
    { label: "メイン", modeId: "paletteMainModeInput", finishId: "paletteMainFinishInput", valueSelectId: "paletteMainValueSelect", valueInputId: "paletteMainValueInput", defaultFinish: "メタリック" },
    { label: "サブ", modeId: "paletteSecondaryModeInput", finishId: "paletteSecondaryFinishInput", valueSelectId: "paletteSecondaryValueSelect", valueInputId: "paletteSecondaryValueInput", defaultFinish: "メタリック" },
    { label: "パール", modeId: "palettePearlModeInput", finishId: "palettePearlFinishInput", valueSelectId: "palettePearlValueSelect", valueInputId: "palettePearlValueInput", defaultFinish: "カメレオン" },
    { label: "ホイール", modeId: "paletteWheelModeInput", finishId: "paletteWheelFinishInput", valueSelectId: "paletteWheelValueSelect", valueInputId: "paletteWheelValueInput", defaultFinish: "メタリック" },
];

const PALETTE_SWATCH_FIELD_CONFIGS = [
    { modeId: "paletteChipPrimaryModeInput", pickerId: "paletteChipPrimaryPicker", inputId: "paletteChipPrimaryInput" },
    { modeId: "paletteChipSecondaryModeInput", pickerId: "paletteChipSecondaryPicker", inputId: "paletteChipSecondaryInput" },
];

const PALETTE_VALUE_PLACEHOLDERS = {
    rgb: "例: RGB(190, 72, 130)",
    hex: "例: #BE4882",
};

const PALETTE_METAL_COLOR_NAMES = ["ブラッシュドスチール", "ブラッシュドブラックスチール", "ブラッシュドアルミニウム", "ピュアゴールド", "ブラッシュドゴールド", "クローム"];
const PALETTE_METAL_COLOR_NAME_SET = new Set(PALETTE_METAL_COLOR_NAMES);

const PALETTE_CHAMELEON_SPECIAL_NAMES = new Set([
    "モノクローム", "ナイト／デイ", "フェーリエル 2", "スプランク・エクストリーム", "バイスシティ", "シンセウェーブ",
    "フォーシーズンズ", "メゾネット9 スローバック", "バブルガム", "フルレインボー", "サンセット", "ザ・セブン",
    "仮面ライダー", "クローム・アバレーション", "クリスマスだよ", "気温", "ハオ・スペシャルワークス", "エレクトロ",
    "モニカ", "フブキ"
]);

const PALETTE_COLOR_IDS = [
    0, 147, 1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 27, 28, 29, 150, 30, 31, 32, 33, 34, 143, 35, 135, 137, 136, 36, 38, 138,
    99, 90, 88, 89, 91, 49, 50, 51, 52, 53, 54, 92, 141, 61, 62, 63, 64, 65, 66, 67, 68, 69, 73, 70, 74, 96, 101, 95, 94, 97,
    103, 104, 98, 100, 102, 99, 105, 106, 71, 72, 142, 145, 107, 111, 112,
    12, 13, 14, 131, 83, 82, 84, 149, 148, 39, 40, 41, 42, 55, 128, 151, 155, 152, 153, 154,
    117, 118, 119, 158, 159, 120,
    161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
    185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
    209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
    233, 234, 235, 236, 237, 238, 239, 240, 241, 242,
];

const JIM_PAINT_NAME_SUGGESTIONS = [
    "ブラック", "カーボンブラック", "グラファイト", "アンスラサイトブラック", "ブラックスチール", "ダークスチール", "シルバー",
    "青みがかったシルバー", "ロールドスチール", "シャドウシルバー", "ストーンシルバー", "ミッドナイトシルバー", "鋳鉄シルバー",
    "レッド", "トリノレッド", "フォーミュラレッド", "ラバレッド", "ブレイズレッド", "グレースレッド", "ガーネットレッド",
    "サンセットレッド", "カベルネレッド", "ワインレッド", "キャンディレッド", "ホットピンク", "フィスター・ピンク", "サーモンピンク",
    "サンライズオレンジ", "オレンジ", "ブライトオレンジ", "ゴールド", "ブロンズ", "イエロー", "レースイエロー", "デューイエロー",
    "ダークグリーン", "レーシンググリーン", "シーグリーン", "オリーブグリーン", "ブライトグリーン", "ガソリン・グリーン", "ライムグリーン",
    "ミッドナイトブルー", "ギャラクシーブルー", "ダークブルー", "サクソンブルー", "ブルー", "マリナーブルー", "ハーバーブルー",
    "ダイヤモンドブルー", "サーフブルー", "ノーティカルブルー", "レーシングブルー", "ウルトラブルー", "ライトブルー",
    "チョコレートブラウン", "バイソンブラウン", "クリーンブラウン", "フェルツァーブラウン", "メイプルブラウン", "ビーチウッドブラウン",
    "シエンナブラウン", "サドルブラウン", "モスブラウン", "ウッドビーチブラウン", "ストローブラウン", "サンディブラウン", "ブリーチドブラウン",
    "シャフターパープル", "スピネーカーパープル", "ミッドナイトパープル", "ブライトパープル", "クリーム", "アイスホワイト", "フロストホワイト",
    "マットブラック", "マットグレー", "マットライトグレー", "マットアイスホワイト", "マットブルー", "マットダークブルー", "マットミッドナイトブルー",
    "マットミッドナイトパープル", "マットシャフターパープル", "マットレッド", "マットダークレッド", "マットオレンジ", "マットイエロー",
    "マットライムグリーン", "マットグリーン", "マットフォレストグリーン", "マットフォリッジグリーン", "マットオリーブドラブ", "マットダークアース", "マットデザートタン",
    "ブラッシュドスチール", "ブラッシュドブラックスチール", "ブラッシュドアルミニウム", "ピュアゴールド", "ブラッシュドゴールド", "クローム",
    "アノダイズドレッド", "アノダイズドワイン", "アノダイズドパープル", "アノダイズドブルー", "アノダイズドグリーン", "アノダイズドライム", "アノダイズドカッパー",
    "アノダイズドブロンズ", "アノダイズドシャンパン", "アノダイズドゴールド", "グリーン/ブルー フリップ", "グリーン/レッド フリップ", "グリーン/ブラウン フリップ",
    "グリーン/ターコイズ フリップ", "グリーン/パープル フリップ", "ティール/パープル フリップ", "ターコイズ/レッド フリップ", "ターコイズ/パープル フリップ",
    "シアン/パープル フリップ", "ブルー/ピンク フリップ", "ブルー/グリーン フリップ", "パープル/レッド フリップ", "パープル/グリーン フリップ",
    "マゼンタ/グリーン フリップ", "マゼンタ/イエロー フリップ", "バーガンディ/グリーン フリップ", "マゼンタ/シアン フリップ", "カッパー/パープル フリップ",
    "マゼンタ/オレンジ フリップ", "レッド/オレンジ フリップ", "オレンジ/パープル フリップ", "オレンジ/ブルー フリップ", "ホワイト/パープル フリップ",
    "レッド/レインボー フリップ", "ブルー/レインボー フリップ", "ダークグリーンパール", "ダークティールパール", "ダークブルーパール", "ダークパープルパール",
    "オイルスリックパール", "ライトグリーンパール", "ライトブルーパール", "ライトパープルパール", "ライトピンクパール", "オフホワイトパール", "ピンクパール",
    "イエローパール", "グリーンパール", "ブルーパール", "クリームパール", "ホワイトプリズマティック", "グラファイトプリズマティック", "ダークブループリズマティック",
    "ダークパープルプリズマティック", "ホットピンクプリズマティック", "ダークレッドプリズマティック", "ダークグリーンプリズマティック", "ブラックプリズマティック",
    "ブラック・オイルスピル", "ブラック・レインボー", "ブラック・ホログラフィック", "ホワイト・ホログラフィック", "モノクローム", "ナイト／デイ", "フェーリエル 2",
    "スプランク・エクストリーム", "バイスシティ", "シンセウェーブ", "フォーシーズンズ", "メゾネット9 スローバック", "バブルガム", "フルレインボー", "サンセット",
    "ザ・セブン", "仮面ライダー", "クローム・アバレーション", "クリスマスだよ", "気温", "ハオ・スペシャルワークス", "エレクトロ", "モニカ", "フブキ"
];

const PALETTE_COLOR_ID_BY_NAME = Object.fromEntries(
    JIM_PAINT_NAME_SUGGESTIONS.map((name, index) => [name, PALETTE_COLOR_IDS[index]])
);

const PALETTE_VALUE_OPTIONS_BY_FINISH = buildPaletteValueOptionsByFinish();

const DEFAULT_COLOR_GUIDE_ENTRIES = [
    {
        id: "gang-ohio",
        category: "ギャング",
        name: "Ｏ h i o",
        accent: "ピンク",
        details: [{ label: "メイン / サブ", value: "クラシック / RGB(190, 72, 130)" }],
        swatches: [{ label: "RGB(190, 72, 130)", hex: "#BE4882" }],
        pickerRgb: "RGB(190, 72, 130)",
        pickerHex: "#BE4882",
        note: "",
        custom: false,
    },
    {
        id: "gang-honey-glow",
        category: "ギャング",
        name: "Honey Glow",
        accent: "黄色",
        details: [
            { label: "メイン", value: "メタリック / レースイエロー" },
            { label: "サブ", value: "メタリック / レースイエロー" },
            { label: "パール", value: "カメレオン / ハオ・スペシャルワークス" },
        ],
        swatches: [
            { label: "レースイエロー", hex: "#F0C11D" },
            { label: "ハオ・スペシャルワークス", hex: "#EBCC42", hexB: "#9AA04B" },
        ],
        note: "",
        custom: false,
    },
    {
        id: "gang-lazos",
        category: "ギャング",
        name: "LAZOS",
        accent: "黒色",
        details: [
            { label: "メイン", value: "メタリック / ブラック" },
            { label: "サブ", value: "メタリック / ブラック" },
        ],
        swatches: [{ label: "ブラック", hex: "#0F0F10" }],
        note: "",
        custom: false,
    },
    {
        id: "gang-404",
        category: "ギャング",
        name: "404 Not found",
        accent: "水色",
        details: [
            { label: "メイン", value: "クラシック / RGB(122, 156, 255)" },
            { label: "パール", value: "マット / マットブラック" },
        ],
        swatches: [
            { label: "RGB(122, 156, 255)", hex: "#7A9CFF" },
            { label: "マットブラック", hex: "#141414" },
        ],
        pickerRgb: "RGB(122, 156, 255)",
        pickerHex: "#7A9CFF",
        note: "",
        custom: false,
    },
    {
        id: "gang-clover",
        category: "ギャング",
        name: "Clover",
        accent: "緑色",
        details: [{ label: "メイン / サブ", value: "メタリック / ライムグリーン" }],
        swatches: [{ label: "ライムグリーン", hex: "#74CF30" }],
        note: "",
        custom: false,
    },
    {
        id: "gang-amber",
        category: "ギャング",
        name: "Amber",
        accent: "青色",
        details: [{ label: "メイン / サブ", value: "カメレオン / アノダイズドブルー" }],
        swatches: [{ label: "アノダイズドブルー", hex: "#1F7AF7", hexB: "#56B4FF" }],
        note: "",
        custom: false,
    },
    {
        id: "gang-othello",
        category: "ギャング",
        name: "Othello",
        accent: "灰色",
        details: [{ label: "メイン / サブ", value: "カメレオン / モノクローム" }],
        swatches: [{ label: "モノクローム", hex: "#C9C9C9", hexB: "#6D6D6D" }],
        note: "",
        custom: false,
    },
    {
        id: "gang-momiji-orange",
        category: "ギャング",
        name: "椛",
        accent: "オレンジ",
        details: [
            { label: "メイン", value: "メタリック / 138.ブライトオレンジ" },
            { label: "サブ", value: "メタリック / 138.ブライトオレンジ" },
        ],
        swatches: [{ label: "138.ブライトオレンジ", hex: "#FF6F00" }],
        note: "",
        custom: false,
    },
    {
        id: "hangure-purple",
        category: "半グレ",
        name: "むらさき",
        accent: "紫色",
        details: [
            { label: "メイン", value: "マット / RGB(100, 0, 171) / #6400AB" },
            { label: "サブ", value: "マット / RGB(100, 0, 171)" },
            { label: "パール", value: "マット / 12.マットブラック" },
        ],
        swatches: [
            { label: "RGB(100, 0, 171)", hex: "#6400AB" },
            { label: "12.マットブラック", hex: "#141414" },
        ],
        pickerRgb: "RGB(100, 0, 171)",
        pickerHex: "#6400AB",
        note: "",
        custom: false,
    },
    {
        id: "hangure-dark-red",
        category: "半グレ",
        name: "濃い赤",
        accent: "濃い赤",
        details: [{ label: "メイン / サブ", value: "メタリック / カベルネレッド" }],
        swatches: [{ label: "カベルネレッド", hex: "#4A111A" }],
        note: "",
        custom: false,
    },
    {
        id: "hangure-red",
        category: "半グレ",
        name: "赤",
        accent: "赤",
        details: [
            { label: "メイン", value: "メタリック / レッド" },
            { label: "サブ", value: "メタリック / フォーミュラレッド" },
            { label: "パール", value: "メタリック / フォーミュラレッド" },
        ],
        swatches: [
            { label: "レッド", hex: "#D11921" },
            { label: "フォーミュラレッド", hex: "#C31B21" },
        ],
        note: "",
        custom: false,
    },
];

const DEFAULT_NOTES = {
    title: "",
    body: "",
    updatedAt: "",
};

const COLOR_GUIDE_SEED_VERSION = "2026-07-04-hangure-reds-momiji-v1";

const COLOR_GUIDE_SEED_ENTRIES = [
    {
        id: "seed-gang-ohio-20260602",
        category: "ギャング",
        name: "Ｏ h i o",
        accent: "ピンク",
        details: [{ label: "メイン / サブ", value: "RGB(190, 72, 130)" }],
        swatches: [{ label: "RGB(190, 72, 130)", hex: "#BE4882" }],
        pickerRgb: "RGB(190, 72, 130)",
        pickerHex: "#BE4882",
        note: "",
        custom: true,
    },
    {
        id: "seed-gang-honey-glow-20260602",
        category: "ギャング",
        name: "Honey Glow",
        accent: "黄色",
        details: [
            { label: "メイン", value: "メタリック / 34.レースイエロー" },
            { label: "サブ", value: "メタリック / 34.レースイエロー" },
            { label: "パール", value: "カメレオン / 79.ハオ・スペシャルワークス" },
        ],
        swatches: [
            { label: "34.レースイエロー", hex: "#F0C11D" },
            { label: "79.ハオ・スペシャルワークス", hex: "#EBCC42", hexB: "#9AA04B" },
        ],
        note: "",
        custom: true,
    },
    {
        id: "seed-gang-lazos-20260602",
        category: "ギャング",
        name: "LAZOS",
        accent: "黒色",
        details: [
            { label: "メイン", value: "メタリック / 1.ブラック" },
            { label: "サブ", value: "メタリック / 1.ブラック" },
        ],
        swatches: [{ label: "1.ブラック", hex: "#0F0F10" }],
        note: "",
        custom: true,
    },
    {
        id: "seed-gang-404-not-found-20260602",
        category: "ギャング",
        name: "404 Not found",
        accent: "水色",
        details: [
            { label: "メイン", value: "クラシック / RGB(122, 156, 255)" },
            { label: "パール", value: "マット / 1.マットブラック" },
        ],
        swatches: [
            { label: "RGB(122, 156, 255)", hex: "#7A9CFF" },
            { label: "1.マットブラック", hex: "#141414" },
        ],
        pickerRgb: "RGB(122, 156, 255)",
        pickerHex: "#7A9CFF",
        note: "",
        custom: true,
    },
    {
        id: "seed-gang-clover-20260602",
        category: "ギャング",
        name: "Clover",
        accent: "緑色",
        details: [{ label: "メイン / サブ", value: "メタリック / 42.ライムグリーン" }],
        swatches: [{ label: "42.ライムグリーン", hex: "#74CF30" }],
        note: "",
        custom: true,
    },
    {
        id: "seed-gang-amber-20260602",
        category: "ギャング",
        name: "Amber",
        accent: "青色",
        details: [{ label: "メイン / サブ", value: "カメレオン / 4.アノダイズドブルー" }],
        swatches: [{ label: "4.アノダイズドブルー", hex: "#1F7AF7", hexB: "#56B4FF" }],
        note: "",
        custom: true,
    },
    {
        id: "seed-gang-othello-20260602",
        category: "ギャング",
        name: "Othello",
        accent: "灰色",
        details: [{ label: "メイン / サブ", value: "カメレオン / 63.モノクローム" }],
        swatches: [{ label: "63.モノクローム", hex: "#C9C9C9", hexB: "#6D6D6D" }],
        note: "",
        custom: true,
    },
    {
        id: "seed-gang-momiji-orange-20260704-v2",
        category: "ギャング",
        name: "椛",
        accent: "オレンジ",
        details: [
            { label: "メイン", value: "メタリック / 138.ブライトオレンジ" },
            { label: "サブ", value: "メタリック / 138.ブライトオレンジ" },
        ],
        swatches: [{ label: "138.ブライトオレンジ", hex: "#FF6F00" }],
        note: "",
        custom: true,
    },
    {
        id: "seed-hangure-purple-20260704",
        category: "半グレ",
        name: "むらさき",
        accent: "紫色",
        details: [
            { label: "メイン", value: "マット / RGB(100, 0, 171) / #6400AB" },
            { label: "サブ", value: "マット / RGB(100, 0, 171)" },
            { label: "パール", value: "マット / 12.マットブラック" },
        ],
        swatches: [
            { label: "RGB(100, 0, 171)", hex: "#6400AB" },
            { label: "12.マットブラック", hex: "#141414" },
        ],
        pickerRgb: "RGB(100, 0, 171)",
        pickerHex: "#6400AB",
        note: "",
        custom: true,
    },
    {
        id: "seed-hangure-dark-red-20260704",
        category: "半グレ",
        name: "濃い赤",
        accent: "濃い赤",
        details: [{ label: "メイン / サブ", value: "メタリック / カベルネレッド" }],
        swatches: [{ label: "カベルネレッド", hex: "#4A111A" }],
        note: "",
        custom: true,
    },
    {
        id: "seed-hangure-red-20260704",
        category: "半グレ",
        name: "赤",
        accent: "赤",
        details: [
            { label: "メイン", value: "メタリック / レッド" },
            { label: "サブ", value: "メタリック / フォーミュラレッド" },
            { label: "パール", value: "メタリック / フォーミュラレッド" },
        ],
        swatches: [
            { label: "レッド", hex: "#D11921" },
            { label: "フォーミュラレッド", hex: "#C31B21" },
        ],
        note: "",
        custom: true,
    },
];

const REMOVED_COLOR_GUIDE_ENTRY_IDS = new Set([
    "hangure-orange",
    "seed-hangure-orange-20260602",
    "gang-eva",
    "seed-gang-eva-20260602",
    "gang-unison",
    "seed-gang-unison-20260602",
    "hangure-lavender",
    "seed-hangure-lavender-20260602",
    "seed-gang-momiji-orange-20260704",
]);

const REMOVED_COLOR_GUIDE_ENTRY_KEYS = new Set([
    "半グレ::オレンジ",
    "半グレ::ラベンダー",
    "ギャング::E.V.A",
    "ギャング::Unison",
]);

const state = {
    currentView: "home",
    prices: loadPrices(),
    selections: loadSelections(),
    orderResult: createEmptyOrderResult(),
    colorGuide: loadColorGuide(),
    notes: loadNotes(),
};

const elements = {
    views: document.querySelectorAll(".view"),
    colorsView: document.getElementById("colors"),
    billingSpreadsheet: document.getElementById("billingSpreadsheet"),
    selectedRowCount: document.getElementById("selectedRowCount"),
    selectedUnitCount: document.getElementById("selectedUnitCount"),
    billingGrandTotal: document.getElementById("billingGrandTotal"),
    whitePassTotal: document.getElementById("whitePassTotal"),
    whitePassExcludedTotal: document.getElementById("whitePassExcludedTotal"),
    resetBillingSelectionButton: document.getElementById("resetBillingSelectionButton"),
    resetBillingCatalogButton: document.getElementById("resetBillingCatalogButton"),
    exportBillingConfigButton: document.getElementById("exportBillingConfigButton"),
    importBillingConfigButton: document.getElementById("importBillingConfigButton"),
    billingImportInput: document.getElementById("billingImportInput"),
    orderInput: document.getElementById("orderInput"),
    parseOrderButton: document.getElementById("parseOrderButton"),
    applyOrderToBillingButton: document.getElementById("applyOrderToBillingButton"),
    resetOrderButton: document.getElementById("resetOrderButton"),
    orderLineCount: document.getElementById("orderLineCount"),
    requiredItemCount: document.getElementById("requiredItemCount"),
    estimatedOrderTotal: document.getElementById("estimatedOrderTotal"),
    matchedOrderCount: document.getElementById("matchedOrderCount"),
    uniqueRequiredItemCount: document.getElementById("uniqueRequiredItemCount"),
    requiredItemEntries: document.getElementById("requiredItemEntries"),
    requiredItemUnitTotal: document.getElementById("requiredItemUnitTotal"),
    requiredItemTypeTotal: document.getElementById("requiredItemTypeTotal"),
    unknownOrderCount: document.getElementById("unknownOrderCount"),
    orderEntries: document.getElementById("orderEntries"),
    unknownOrderEntries: document.getElementById("unknownOrderEntries"),
    notesTitleInput: document.getElementById("notesTitleInput"),
    notesBodyInput: document.getElementById("notesBodyInput"),
    notesTitleState: document.getElementById("notesTitleState"),
    notesLineCount: document.getElementById("notesLineCount"),
    notesCharCount: document.getElementById("notesCharCount"),
    notesSaveStatus: document.getElementById("notesSaveStatus"),
    copyNotesButton: document.getElementById("copyNotesButton"),
    clearNotesButton: document.getElementById("clearNotesButton"),
    exportNotesButton: document.getElementById("exportNotesButton"),
    importNotesButton: document.getElementById("importNotesButton"),
    notesImportInput: document.getElementById("notesImportInput"),
    paletteEntryForm: document.getElementById("paletteEntryForm"),
    paletteCategoryInput: document.getElementById("paletteCategoryInput"),
    paletteNameInput: document.getElementById("paletteNameInput"),
    paletteAccentInput: document.getElementById("paletteAccentInput"),
    paletteMainInput: document.getElementById("paletteMainInput"),
    paletteSecondaryInput: document.getElementById("paletteSecondaryInput"),
    palettePearlInput: document.getElementById("palettePearlInput"),
    paletteWheelInput: document.getElementById("paletteWheelInput"),
    paletteChipPrimaryModeInput: document.getElementById("paletteChipPrimaryModeInput"),
    paletteChipPrimaryPicker: document.getElementById("paletteChipPrimaryPicker"),
    paletteChipPrimaryInput: document.getElementById("paletteChipPrimaryInput"),
    paletteChipSecondaryModeInput: document.getElementById("paletteChipSecondaryModeInput"),
    paletteChipSecondaryPicker: document.getElementById("paletteChipSecondaryPicker"),
    paletteChipSecondaryInput: document.getElementById("paletteChipSecondaryInput"),
    paletteExtraDetailsInput: document.getElementById("paletteExtraDetailsInput"),
    resetPaletteFormButton: document.getElementById("resetPaletteFormButton"),
    exportPaletteConfigButton: document.getElementById("exportPaletteConfigButton"),
    importPaletteConfigButton: document.getElementById("importPaletteConfigButton"),
    paletteImportInput: document.getElementById("paletteImportInput"),
    paletteSemiCount: document.getElementById("paletteSemiCount"),
    paletteGangCount: document.getElementById("paletteGangCount"),
    paletteSemiEntries: document.getElementById("paletteSemiEntries"),
    paletteGangEntries: document.getElementById("paletteGangEntries"),
};

wireEvents();
cleanupSelections();
renderAll();
resetPaletteEntryForm();

function wireEvents() {
    document.querySelectorAll("[data-view-target]").forEach((button) => {
        button.addEventListener("click", () => {
            setView(button.dataset.viewTarget);
        });
    });

    elements.billingSpreadsheet.addEventListener("change", handleBillingToggle);
    elements.billingSpreadsheet.addEventListener("change", handleBillingQuantityInput);
    document.addEventListener("click", (event) => {
        void handleCopyableTotalClick(event);
    });
    document.addEventListener("keydown", (event) => {
        void handleCopyableTotalKeydown(event);
    });

    elements.resetBillingSelectionButton.addEventListener("click", () => {
        state.selections = {};
        saveSelections();
        renderBilling();
    });

    elements.resetBillingCatalogButton.addEventListener("click", () => {
        if (!window.confirm("画像の初期金額に戻します。よろしいですか。")) {
            return;
        }
        state.prices = { ...DEFAULT_PRICES };
        savePrices();
        refreshOrderResultPrices();
        renderBilling();
        renderOrder();
    });

    elements.exportBillingConfigButton.addEventListener("click", exportBillingConfig);
    elements.importBillingConfigButton.addEventListener("click", () => elements.billingImportInput.click());
    elements.billingImportInput.addEventListener("change", importBillingConfig);

    elements.parseOrderButton.addEventListener("click", () => {
        state.orderResult = parseOrderSheet(elements.orderInput.value);
        renderOrder();
    });

    elements.resetOrderButton.addEventListener("click", () => {
        elements.orderInput.value = "";
        state.orderResult = createEmptyOrderResult();
        renderOrder();
    });

    elements.notesTitleInput.addEventListener("input", handleNotesInput);
    elements.notesBodyInput.addEventListener("input", handleNotesInput);
    elements.copyNotesButton.addEventListener("click", () => {
        void handleNotesCopy();
    });
    elements.clearNotesButton.addEventListener("click", clearNotes);
    elements.exportNotesButton.addEventListener("click", exportNotesConfig);
    elements.importNotesButton.addEventListener("click", () => elements.notesImportInput.click());
    elements.notesImportInput.addEventListener("change", importNotesConfig);

    elements.paletteEntryForm.addEventListener("submit", handlePaletteEntrySubmit);
    elements.resetPaletteFormButton.addEventListener("click", resetPaletteEntryForm);
    elements.exportPaletteConfigButton.addEventListener("click", exportColorGuideConfig);
    elements.importPaletteConfigButton.addEventListener("click", () => elements.paletteImportInput.click());
    elements.paletteImportInput.addEventListener("change", importColorGuideConfig);
    elements.colorsView.addEventListener("input", handlePaletteGuideInput);
    elements.colorsView.addEventListener("change", handlePaletteGuideChange);
    elements.colorsView.addEventListener("click", (event) => {
        void handlePaletteGuideClick(event);
    });

    elements.applyOrderToBillingButton.addEventListener("click", () => {
        if (!state.orderResult.entries.length) {
            return;
        }
        state.selections = buildSelectionsFromOrderSuggestion(state.orderResult.selectionSuggestion);
        saveSelections();
        renderBilling();
        setView("billing");
    });
}

function handleBillingToggle(event) {
    const target = event.target;
    if (!target.matches("[data-role='billing-toggle']")) {
        return;
    }

    const itemId = target.dataset.itemId;
    const groupId = target.dataset.group || "";

    if (!KNOWN_SELECTION_IDS.has(itemId)) {
        return;
    }

    if (itemId.startsWith("exterior_custom_")) {
        updateCumulativeSlots(EXTERIOR_SLOT_IDS, itemId, target.checked);
        saveSelections();
        renderBilling();
        return;
    }

    if (itemId.startsWith("paint_custom_")) {
        updateCumulativeSlots(PAINT_SLOT_IDS, itemId, target.checked);
        saveSelections();
        renderBilling();
        return;
    }

    if (isQuantityEnabledItem(itemId)) {
        if (target.checked) {
            state.selections[itemId] = Math.max(1, getSelectionQuantity(itemId) || 1);
        } else {
            delete state.selections[itemId];
        }
        saveSelections();
        renderBilling();
        return;
    }

    if (target.checked) {
        if (groupId) {
            const row = BILLING_TIER_ROWS.find((entry) => entry.group === groupId);
            row?.cells.forEach((cellId) => {
                if (cellId) {
                    delete state.selections[cellId];
                }
            });
        }
        state.selections[itemId] = 1;
    } else {
        delete state.selections[itemId];
    }

    saveSelections();
    renderBilling();
}

function handleBillingQuantityInput(event) {
    const target = event.target;
    if (!target.matches("[data-role='billing-quantity']")) {
        return;
    }

    const itemId = target.dataset.itemId;
    if (!isQuantityEnabledItem(itemId)) {
        return;
    }

    const quantity = Math.max(1, Math.floor(Number(target.value) || 1));
    state.selections[itemId] = quantity;
    target.value = String(quantity);
    saveSelections();
    renderBilling();
}

function setView(viewId) {
    state.currentView = viewId;
    document.body.dataset.activeView = viewId;
    elements.views.forEach((view) => {
        view.classList.toggle("view-active", view.id === viewId);
    });
}

function renderAll() {
    renderBilling();
    renderOrder();
    renderNotes(true);
    renderColorGuide();
    setView(state.currentView);
}

function renderBilling() {
    renderBillingSpreadsheet();
    renderBillingSummary();
}

function renderBillingSpreadsheet() {
    const shell = document.createElement("div");
    shell.className = "billing-sheet-grid";

    shell.appendChild(createTierMatrixCard());
    shell.appendChild(createFixedItemsCard());

    const sideColumn = document.createElement("div");
    sideColumn.className = "billing-side-column";
    sideColumn.appendChild(createSlotCard("外装系カスタム(一か所)", EXTERIOR_SLOT_IDS, getBucketUnitPrice("exterior"), 5, BILLING_DECORATION_ICONS.exterior));
    sideColumn.appendChild(createSlotCard("塗装(一か所)", PAINT_SLOT_IDS, getBucketUnitPrice("paint"), 3, BILLING_DECORATION_ICONS.paint));
    shell.appendChild(sideColumn);

    elements.billingSpreadsheet.replaceChildren(shell);
}

function createTierMatrixCard() {
    const card = document.createElement("section");
    card.className = "billing-sheet-card billing-tier-card";

    const headCells = BILLING_TIER_COLUMNS.map((label) => `<th>${label}</th>`).join("");
    const bodyRows = BILLING_TIER_ROWS.map((row) => {
        const cells = row.cells.map((cellId) => renderTierCell(row.group, cellId)).join("");
        return `
            <tr>
                <th scope="row">${renderBillingRowLabel(row.label, row.icon, row.label)}</th>
                ${cells}
            </tr>
        `;
    }).join("");

    card.innerHTML = `
        <table class="billing-tier-table">
            <thead>
                <tr>
                    <th>${renderBillingHeaderLabel("パーツ名 / Tire", BILLING_DECORATION_ICONS.tier, "タイヤ")}</th>
                    ${headCells}
                </tr>
            </thead>
            <tbody>
                ${bodyRows}
            </tbody>
        </table>
    `;

    return card;
}

function renderTierCell(groupId, cellId) {
    if (!cellId) {
        return `<td class="billing-empty-cell"></td>`;
    }

    const checked = Boolean(state.selections[cellId]);
    const cellClass = checked ? "billing-tier-select checked" : "billing-tier-select";
    const iconPath = resolveTierCellIcon(groupId, cellId);
    return `
        <td>
            <label class="${cellClass}">
                <span class="billing-tier-icon"><img src="${iconPath}" alt="${escapeHtml(cellId)}"></span>
                <span class="billing-tier-price">${formatTierPrice(getPriceForItem(cellId))}</span>
                <input type="checkbox" data-role="billing-toggle" data-group="${groupId}" data-item-id="${cellId}" ${checked ? "checked" : ""}>
            </label>
        </td>
    `;
}

function createFixedItemsCard() {
    const card = document.createElement("section");
    card.className = "billing-sheet-card billing-fixed-card";

    const itemRows = BILLING_FIXED_ITEMS.map((item, index) => renderFixedItemRow(item, index)).join("");

    card.innerHTML = `
        <div class="billing-fixed-head">
            ${renderBillingHeaderLabel("その他パーツ", BILLING_DECORATION_ICONS.fixed, "工具箱")}
            <span>金額</span>
        </div>
        <div class="billing-fixed-grid">
            ${itemRows}
        </div>
    `;

    return card;
}

function createSlotCard(title, slotIds, unitPrice, rowsPerColumn, iconPath) {
    const card = document.createElement("section");
    card.className = "billing-sheet-card billing-slot-card";

    const columns = chunkBySize(slotIds, rowsPerColumn)
        .map((chunk) => {
            const rows = chunk.map((slotId) => {
                const number = slotId.split("_").pop();
                const checked = Boolean(state.selections[slotId]);
                return `
                    <label class="billing-slot-entry">
                        <span>${number}</span>
                        <input type="checkbox" data-role="billing-toggle" data-item-id="${slotId}" ${checked ? "checked" : ""}>
                    </label>
                `;
            }).join("");
            return `<div class="billing-slot-column">${rows}</div>`;
        }).join("");

    card.innerHTML = `
        <div class="billing-slot-header">
            <div class="billing-slot-title-wrap">${renderBillingHeaderLabel(title, iconPath, title)}</div>
            <strong>${formatNumber(unitPrice)}</strong>
        </div>
        <div class="billing-slot-columns">
            ${columns}
        </div>
    `;

    return card;
}

function renderBillingSummary() {
    const stats = calculateBillingStats();
    elements.selectedRowCount.textContent = String(stats.selectedCount);
    elements.selectedUnitCount.textContent = String(stats.customUnitCount);
    elements.billingGrandTotal.textContent = formatCurrency(stats.total);
    elements.billingGrandTotal.dataset.copyValue = formatPlainCurrencyValue(stats.total);
    elements.whitePassTotal.textContent = formatCurrency(stats.whitePassTotal);
    elements.whitePassTotal.dataset.copyValue = formatPlainCurrencyValue(stats.whitePassTotal);
    elements.whitePassExcludedTotal.textContent = formatCurrency(stats.excludedTotal);
}

function calculateBillingStats() {
    let selectedCount = 0;
    let customUnitCount = 0;
    let total = 0;
    let excludedTotal = 0;

    Object.keys(state.selections).forEach((itemId) => {
        if (!KNOWN_SELECTION_IDS.has(itemId)) {
            return;
        }

        const quantity = getSelectionQuantity(itemId);
        if (quantity <= 0) {
            return;
        }

        const lineTotal = getPriceForItem(itemId) * quantity;

        selectedCount += 1;
        total += lineTotal;

        if (itemId.startsWith("exterior_custom_") || itemId.startsWith("paint_custom_")) {
            customUnitCount += quantity;
        }

        if (isWhitePassExcludedItem(itemId)) {
            excludedTotal += lineTotal;
        }
    });

    const whitePassBase = Math.max(0, total - excludedTotal);
    const whitePassTotal = Math.round(whitePassBase * 0.95) + excludedTotal;

    return { selectedCount, customUnitCount, total, excludedTotal, whitePassTotal };
}

function renderOrder() {
    renderOrderEntries();
    renderRequiredItemEntries();
    renderUnknownEntries();
    renderOrderSummary();
    elements.applyOrderToBillingButton.disabled = state.orderResult.entries.length === 0;
}

function renderOrderEntries() {
    if (!state.orderResult.entries.length) {
        elements.orderEntries.className = "entry-stack empty-state";
        elements.orderEntries.textContent = "貼り付けてから解析すると、ここにカスタム内容が表示されます。";
        return;
    }

    elements.orderEntries.className = "entry-stack";
    const fragment = document.createDocumentFragment();
    state.orderResult.entries.forEach((entry) => {
        const itemMeta = ITEM_LIBRARY[entry.requiredItemKey] || { label: entry.requiredItemKey, labelJa: entry.requiredItemKey, icon: null };
        const node = document.createElement("article");
        node.className = "order-entry";
        node.innerHTML = `
            <div class="entry-topline">
                <h4>${escapeHtml(entry.rawCategory)}</h4>
                <span class="entry-price">${formatCurrency(entry.estimatedPrice)}</span>
            </div>
            <div class="order-entry-body">
                <p class="entry-detail-line">${escapeHtml(entry.detail)}</p>
                <div class="entry-required">
                    <div class="icon-chip entry-required-icon">${itemMeta.icon ? `<img src="${itemMeta.icon}" alt="">` : ""}</div>
                    <div class="entry-required-copy">
                        <span class="entry-required-label">必要アイテム</span>
                        <strong>${escapeHtml(itemMeta.labelJa || itemMeta.label)}</strong>
                        <p>${escapeHtml(itemMeta.label)} / ${escapeHtml(entry.requiredItemKey)} x1</p>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(node);
    });
    elements.orderEntries.replaceChildren(fragment);
}

function renderUnknownEntries() {
    if (!state.orderResult.unknownLines.length) {
        elements.unknownOrderEntries.className = "entry-stack empty-state";
        elements.unknownOrderEntries.textContent = "未判定の行はありません。";
        return;
    }

    elements.unknownOrderEntries.className = "entry-stack";
    const fragment = document.createDocumentFragment();
    state.orderResult.unknownLines.forEach((line) => {
        const node = document.createElement("article");
        node.className = "unknown-entry";
        node.innerHTML = `<p>${escapeHtml(line)}</p>`;
        fragment.appendChild(node);
    });
    elements.unknownOrderEntries.replaceChildren(fragment);
}

function renderRequiredItemEntries() {
    if (!state.orderResult.requiredItems.length) {
        elements.requiredItemEntries.className = "required-grid empty-state";
        elements.requiredItemEntries.textContent = "貼り付けてから解析すると、ここに必要アイテムの合計が表示されます。";
        return;
    }

    elements.requiredItemEntries.className = "required-grid";
    const fragment = document.createDocumentFragment();

    state.orderResult.requiredItems.forEach((item) => {
        const itemMeta = ITEM_LIBRARY[item.key] || { label: item.key, labelJa: item.key, icon: null };
        const node = document.createElement("article");
        node.className = "required-item-card";
        node.innerHTML = `
            <div class="required-item-head">
                <div class="icon-chip required-item-card-icon">${itemMeta.icon ? `<img src="${itemMeta.icon}" alt="">` : ""}</div>
                <div class="required-item-copy">
                    <strong>${escapeHtml(itemMeta.labelJa || itemMeta.label)}</strong>
                    <p>${escapeHtml(itemMeta.label)} / ${escapeHtml(item.key)}</p>
                </div>
            </div>
            <strong class="required-item-count">x${formatNumber(item.count)}</strong>
        `;
        fragment.appendChild(node);
    });

    elements.requiredItemEntries.replaceChildren(fragment);
}

function renderOrderSummary() {
    const matched = state.orderResult.entries.length;
    const requiredTotal = state.orderResult.requiredItems.reduce((total, item) => total + item.count, 0);
    elements.orderLineCount.textContent = String(state.orderResult.lineCount);
    elements.requiredItemCount.textContent = String(requiredTotal);
    elements.estimatedOrderTotal.textContent = formatCurrency(state.orderResult.estimatedTotal);
    elements.estimatedOrderTotal.dataset.copyValue = formatPlainCurrencyValue(state.orderResult.estimatedTotal);
    elements.matchedOrderCount.textContent = `${matched}件`;
    elements.uniqueRequiredItemCount.textContent = `${state.orderResult.requiredItems.length}種`;
    elements.requiredItemUnitTotal.textContent = `${formatNumber(requiredTotal)}個`;
    elements.requiredItemTypeTotal.textContent = `${state.orderResult.requiredItems.length}種`;
    elements.unknownOrderCount.textContent = `${state.orderResult.unknownLines.length}件`;
}

function renderNotes(syncFields = false) {
    if (syncFields) {
        elements.notesTitleInput.value = state.notes.title;
        elements.notesBodyInput.value = state.notes.body;
    }

    const nonEmptyLines = state.notes.body
        .split(/\r?\n/)
        .filter((line) => line.trim())
        .length;

    elements.notesTitleState.textContent = state.notes.title ? "入力済み" : "未入力";
    elements.notesLineCount.textContent = `${nonEmptyLines}行`;
    elements.notesCharCount.textContent = `${state.notes.body.length}字`;
    elements.notesSaveStatus.textContent = formatNotesStatus(state.notes);
}

function handleNotesInput() {
    state.notes = sanitizeNotesData({
        title: elements.notesTitleInput.value,
        body: elements.notesBodyInput.value,
        updatedAt: new Date().toISOString(),
    });
    saveNotes();
    renderNotes();
}

async function handleNotesCopy() {
    const text = buildNotesClipboardText(state.notes);
    if (!text) {
        window.alert("コピーするメモがありません。本文を入力してください。");
        return;
    }

    const copied = await copyTextToClipboard(text);
    if (!copied) {
        window.alert("コピーに失敗しました。ブラウザの権限を確認してください。");
        return;
    }

    flashCopyButton(elements.copyNotesButton);
}

async function handleCopyableTotalClick(event) {
    const totalElement = event.target.closest(".copyable-total");
    if (!totalElement) {
        return;
    }

    await copyTotalValue(totalElement);
}

async function handleCopyableTotalKeydown(event) {
    const totalElement = event.target.closest(".copyable-total");
    if (!totalElement || (event.key !== "Enter" && event.key !== " ")) {
        return;
    }

    event.preventDefault();
    await copyTotalValue(totalElement);
}

async function copyTotalValue(totalElement) {
    const value = totalElement.dataset.copyValue || formatPlainCurrencyValue(totalElement.textContent);
    const copied = await copyTextToClipboard(value);
    if (!copied) {
        window.alert("コピーに失敗しました。ブラウザの権限を確認してください。");
        return;
    }

    flashCopyableTotal(totalElement);
}

function flashCopyableTotal(totalElement) {
    const originalTitle = totalElement.dataset.originalTitle || totalElement.getAttribute("title") || "";
    totalElement.dataset.originalTitle = originalTitle;
    totalElement.classList.add("copyable-total-copied");
    totalElement.setAttribute("title", "コピーしました");

    window.clearTimeout(Number(totalElement.dataset.copyTimer || 0));
    const timer = window.setTimeout(() => {
        totalElement.classList.remove("copyable-total-copied");
        totalElement.setAttribute("title", originalTitle || "数字のみコピー");
        totalElement.dataset.copyTimer = "";
    }, 1100);
    totalElement.dataset.copyTimer = String(timer);
}

function clearNotes() {
    if (!window.confirm("メモ欄の内容を消去します。よろしいですか。")) {
        return;
    }

    state.notes = { ...DEFAULT_NOTES };
    saveNotes();
    renderNotes(true);
}

function renderColorGuide() {
    const semiEntries = state.colorGuide.filter((entry) => entry.category === "半グレ");
    const gangEntries = state.colorGuide.filter((entry) => entry.category === "ギャング");

    renderColorGuideSummary(semiEntries, gangEntries);
    renderColorGuideGroup(elements.paletteGangEntries, gangEntries, "ギャングの登録はまだありません。");
    renderColorGuideGroup(elements.paletteSemiEntries, semiEntries, "半グレの登録はまだありません。");
}

function renderColorGuideSummary(semiEntries = null, gangEntries = null) {
    const semi = semiEntries || state.colorGuide.filter((entry) => entry.category === "半グレ");
    const gang = gangEntries || state.colorGuide.filter((entry) => entry.category === "ギャング");
    elements.paletteSemiCount.textContent = `${semi.length}件`;
    elements.paletteGangCount.textContent = `${gang.length}件`;
}

function renderColorGuideGroup(container, entries, emptyMessage) {
    if (!entries.length) {
        container.className = "empty-state";
        container.textContent = emptyMessage;
        return;
    }

    container.className = "palette-card-grid";
    const fragment = document.createDocumentFragment();

    entries.forEach((entry) => {
        const node = document.createElement("article");
        node.className = "palette-card";
        node.innerHTML = createColorGuideCardMarkup(entry);
        fragment.appendChild(node);
    });

    container.replaceChildren(fragment);
}

function createColorGuideCardMarkup(entry) {
    const chipMarkup = entry.swatches
        .map((swatch) => {
            const gradientClass = swatch.hexB ? " gradient" : "";
            const style = swatch.hexB
                ? `--swatch-a: ${swatch.hex}; --swatch-b: ${swatch.hexB};`
                : `--swatch-a: ${swatch.hex};`;
            return `<span class="palette-chip${gradientClass}" style="${style}" title="${escapeHtml(swatch.label || entry.name)}"></span>`;
        })
        .join("");

    const firstRgbDetailIndex = entry.pickerRgb
        ? entry.details.findIndex((detail) => String(detail.value || "").includes(entry.pickerRgb))
        : -1;

    const detailMarkup = entry.details.length
        ? entry.details
            .map((detail, detailIndex) => `
                <p>
                    <strong>${escapeHtml(detail.label)}</strong>
                    <span class="palette-detail-value">${renderPaletteDetailValueMarkup(detail.value, entry, detailIndex, firstRgbDetailIndex)}</span>
                </p>
            `)
            .join("")
        : "<p><strong>詳細</strong><span>未入力</span></p>";

    const footerMarkup = `
        <div class="palette-card-footer">
            <button class="ghost-button palette-delete-button" type="button" data-role="palette-delete" data-entry-id="${escapeHtml(entry.id)}">削除</button>
        </div>
    `;

    const noteMarkup = entry.note
        ? `<div class="palette-note-display"><p class="palette-note-text">${escapeHtml(entry.note)}</p></div>`
        : "";

    return `
        <div class="palette-card-head">
            <div>
                <h4>${escapeHtml(entry.name)}</h4>
                <p>${escapeHtml(entry.accent || entry.category)}</p>
            </div>
            <div class="palette-card-side">
                <div class="palette-chip-list">${chipMarkup}</div>
            </div>
        </div>
        <div class="palette-detail-list">
            ${detailMarkup}
        </div>
        ${noteMarkup}
        ${footerMarkup}
    `;
}

function handlePaletteEntrySubmit(event) {
    event.preventDefault();

    const entry = buildColorGuideEntryFromForm();
    if (!entry) {
        window.alert("名称は必須です。追加するカラー名を入力してください。");
        elements.paletteNameInput.focus();
        return;
    }

    state.colorGuide = [...state.colorGuide, entry];
    saveColorGuide();
    renderColorGuide();
    resetPaletteEntryForm();
}

function handlePaletteGuideInput(event) {
    const target = event.target;

    if (target.matches("[data-role='palette-chip-picker']")) {
        const config = findPaletteSwatchFieldConfigByElementId(target.id);
        if (config) {
            syncPaletteSwatchInputFromPicker(config);
        }
        return;
    }

    if (target.matches("[data-role='palette-chip-mode']")) {
        const config = findPaletteSwatchFieldConfigByElementId(target.id);
        if (config) {
            updatePaletteSwatchInputPlaceholder(config);
        }
        return;
    }

    if (target.matches("[data-role='palette-detail-mode']")) {
        const config = findPaletteDetailFieldConfigByElementId(target.id);
        if (config) {
            syncPaletteDetailControlState(config);
        }
    }
}

function handlePaletteGuideChange(event) {
    const target = event.target;
    if (target.matches("[data-role='palette-detail-mode'], [data-role='palette-detail-finish']")) {
        const config = findPaletteDetailFieldConfigByElementId(target.id);
        if (config) {
            syncPaletteDetailControlState(config);
        }
        return;
    }

    if (target.matches("[data-role='palette-chip-mode']")) {
        const config = findPaletteSwatchFieldConfigByElementId(target.id);
        if (config) {
            const inputElement = document.getElementById(config.inputId);
            if (String(inputElement?.value || "").trim()) {
                syncPaletteSwatchInputFromPicker(config);
            } else {
                updatePaletteSwatchInputPlaceholder(config);
            }
        }
        return;
    }

    if (!target.matches("[data-role='palette-chip-value']")) {
        return;
    }

    const config = findPaletteSwatchFieldConfigByElementId(target.id);
    if (!config) {
        return;
    }

    const normalized = normalizePaletteSwatchInputValue(config, target.value);
    if (!normalized) {
        return;
    }

    target.value = normalized.displayValue;
    const pickerElement = document.getElementById(config.pickerId);
    if (pickerElement) {
        pickerElement.value = normalized.hexValue;
    }
}

async function handlePaletteGuideClick(event) {
    const copyButton = event.target.closest("[data-role='palette-copy']");
    if (copyButton) {
        const copied = await copyTextToClipboard(copyButton.dataset.copyValue || "");
        if (!copied) {
            window.alert("コピーに失敗しました。ブラウザの権限を確認してください。");
            return;
        }

        flashCopyButton(copyButton);
        return;
    }

    const deleteButton = event.target.closest("[data-role='palette-delete']");
    if (!deleteButton) {
        return;
    }

    const entry = findColorGuideEntry(deleteButton.dataset.entryId);
    if (!entry) {
        return;
    }

    if (!window.confirm(`「${entry.name}」を削除します。よろしいですか。`)) {
        return;
    }

    state.colorGuide = state.colorGuide.filter((item) => item.id !== entry.id);
    saveColorGuide();
    renderColorGuide();
}

function resetPaletteEntryForm() {
    elements.paletteCategoryInput.value = PALETTE_CATEGORIES[0];
    elements.paletteNameInput.value = "";
    elements.paletteAccentInput.value = "";
    elements.paletteChipPrimaryModeInput.value = "hex";
    elements.paletteChipPrimaryPicker.value = "#ffffff";
    elements.paletteChipPrimaryInput.value = "";
    elements.paletteChipSecondaryModeInput.value = "hex";
    elements.paletteChipSecondaryPicker.value = "#000000";
    elements.paletteChipSecondaryInput.value = "";
    elements.paletteExtraDetailsInput.value = "";

    PALETTE_DETAIL_FIELD_CONFIGS.forEach((config) => {
        const modeElement = document.getElementById(config.modeId);
        const finishElement = document.getElementById(config.finishId);
        const valueSelectElement = document.getElementById(config.valueSelectId);
        const valueInputElement = document.getElementById(config.valueInputId);

        if (modeElement) {
            modeElement.value = "jm";
        }
        if (finishElement) {
            finishElement.value = config.defaultFinish;
        }
        if (valueSelectElement) {
            valueSelectElement.value = "";
        }
        if (valueInputElement) {
            valueInputElement.value = "";
        }

        syncPaletteDetailControlState(config);
    });

    document.querySelectorAll("[data-role='palette-detail-section']").forEach((section) => {
        section.open = false;
    });

    PALETTE_SWATCH_FIELD_CONFIGS.forEach((config) => {
        updatePaletteSwatchInputPlaceholder(config);
    });
}

function buildColorGuideEntryFromForm() {
    const name = elements.paletteNameInput.value.trim();
    if (!name) {
        return null;
    }

    const builtDetails = buildPaletteDetailsFromForm();

    const swatches = buildPaletteSwatchesFromForm(name, elements.paletteAccentInput.value.trim());
    const primaryHex = swatches[0]?.hex || "";
    const secondaryHex = swatches[1]?.hex || "";

    let pickerHex = builtDetails.copyHex || primaryHex || secondaryHex;
    let pickerRgb = builtDetails.copyRgb;

    if (!pickerHex && pickerRgb) {
        pickerHex = rgbTextToHex(pickerRgb);
    }

    if (!pickerRgb && pickerHex) {
        pickerRgb = hexToRgbText(pickerHex);
    }

    return sanitizeColorGuideEntry({
        id: createColorGuideEntryId(),
        category: elements.paletteCategoryInput.value,
        name,
        accent: elements.paletteAccentInput.value.trim(),
        details: [...builtDetails.details, ...parsePaletteExtraDetails(elements.paletteExtraDetailsInput.value)],
        swatches,
        note: "",
        pickerRgb,
        pickerHex,
        custom: true,
    });
}

function buildPaletteDetailsFromForm() {
    const details = [];
    let copyRgb = "";
    let copyHex = "";

    PALETTE_DETAIL_FIELD_CONFIGS.forEach((config) => {
        const modeElement = document.getElementById(config.modeId);
        const finishElement = document.getElementById(config.finishId);
        const valueSelectElement = document.getElementById(config.valueSelectId);
        const valueInputElement = document.getElementById(config.valueInputId);
        const mode = modeElement?.value || "jm";
        const finish = finishElement?.value || config.defaultFinish;
        const rawValue = getPaletteDetailRawValue(mode, valueSelectElement, valueInputElement);
        const built = buildPaletteDetailValue(mode, finish, rawValue);
        if (!built) {
            return;
        }

        details.push({ label: config.label, value: built.value });
        if (!copyRgb && built.copyRgb) {
            copyRgb = built.copyRgb;
        }
        if (!copyHex && built.copyHex) {
            copyHex = built.copyHex;
        }
    });

    return { details, copyRgb, copyHex };
}

function buildPaletteDetailValue(mode, finish, rawValue) {
    const normalizedMode = PALETTE_DETAIL_MODES.includes(mode) ? mode : "jm";
    const normalizedFinish = PALETTE_FINISH_OPTIONS.includes(finish) ? finish : "メタリック";

    if (!rawValue && normalizedFinish === "純正") {
        return { value: "純正" };
    }

    if (!rawValue) {
        return null;
    }

    if (normalizedMode === "rgb") {
        const normalizedRgb = normalizeRgbText(rawValue) || rawValue;
        const normalizedHex = rgbTextToHex(normalizedRgb);
        const value = normalizedFinish === "純正"
            ? normalizedRgb
            : `${normalizePaletteFinishForValue(normalizedFinish, normalizedRgb)} / ${normalizedRgb}`;
        return { value, copyRgb: normalizeRgbText(normalizedRgb) || "", copyHex: normalizedHex };
    }

    if (normalizedMode === "hex") {
        const normalizedHex = normalizeHexColor(rawValue) || rawValue;
        const normalizedRgb = hexToRgbText(normalizedHex);
        const value = normalizedFinish === "純正"
            ? normalizedHex
            : `${normalizePaletteFinishForValue(normalizedFinish, normalizedHex)} / ${normalizedHex}`;
        return { value, copyRgb: normalizedRgb, copyHex: normalizeHexColor(normalizedHex) || "" };
    }

    if (normalizedFinish === "純正") {
        return { value: "純正" };
    }

    return { value: `${normalizePaletteFinishForValue(normalizedFinish, rawValue)} / ${rawValue}` };
}

function renderPaletteDetailValueMarkup(value, entry, detailIndex, firstRgbDetailIndex) {
    const displayValue = formatPaletteDetailValueForDisplay(value);
    const tokenPattern = /(rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)|#[0-9A-Fa-f]{6})/gi;
    const copyTokens = [];
    let textWithoutTokens = displayValue;
    let hasHexToken = false;

    for (const match of displayValue.matchAll(tokenPattern)) {
        const token = match[0];
        copyTokens.push(token);
        textWithoutTokens = textWithoutTokens.replace(token, " ");
        if (token.startsWith("#")) {
            hasHexToken = true;
        }
    }

    if (!hasHexToken && detailIndex === firstRgbDetailIndex && entry.pickerHex) {
        copyTokens.push(entry.pickerHex);
    }

    if (!copyTokens.length) {
        return escapeHtml(displayValue);
    }

    const compactText = textWithoutTokens.replace(/\s+/g, " ").trim();
    const textMarkup = compactText ? `<span class="palette-detail-text">${escapeHtml(compactText)}</span>` : "";
    const copyMarkup = `<span class="palette-detail-copy-group">${copyTokens.map((token) => buildPaletteInlineCopyMarkup(token)).join("")}</span>`;
    return `${textMarkup}${copyMarkup}`;
}

function buildPaletteInlineCopyMarkup(value) {
    const displayValue = String(value || "").trim();
    const copyValue = formatPaletteCopyValue(displayValue) || displayValue;
    return `
        <button
            class="palette-inline-copy"
            type="button"
            data-role="palette-copy"
            data-copy-value="${escapeHtml(copyValue)}"
            data-copy-label="${escapeHtml(displayValue)}"
        >${escapeHtml(displayValue)}</button>
    `;
}

function formatPaletteCopyValue(value) {
    const rawValue = String(value || "").trim();
    if (!rawValue) {
        return "";
    }

    const normalizedRgb = normalizeRgbText(rawValue);
    if (normalizedRgb) {
        return normalizedRgb.replace(/^RGB/, "rgb");
    }

    return normalizeHexColor(rawValue) || rawValue;
}

function formatPaletteDetailValueForDisplay(value) {
    const rawValue = String(value || "").trim();
    if (!rawValue || rawValue === "純正") {
        return rawValue;
    }

    const match = rawValue.match(/^(.*?)\s*\/\s*(.+)$/);
    if (!match) {
        return formatPalettePaintNameWithId(rawValue);
    }

    const finish = match[1].trim();
    const detailValue = match[2].trim();
    if (/^rgb\(/i.test(detailValue) || detailValue.startsWith("#") || /^\d+\./.test(detailValue)) {
        return `${normalizePaletteFinishForValue(finish, detailValue)} / ${detailValue}`;
    }

    return `${normalizePaletteFinishForValue(finish, detailValue)} / ${formatPalettePaintNameWithId(detailValue)}`;
}

function formatPalettePaintNameWithId(name) {
    const rawName = String(name || "").trim();
    if (!rawName || /^\d+\./.test(rawName)) {
        return rawName;
    }

    const colorId = PALETTE_COLOR_ID_BY_NAME[rawName];
    if (!Number.isFinite(colorId)) {
        return rawName;
    }

    return `${colorId}.${rawName}`;
}

function normalizePaletteFinishForValue(finish, rawValue) {
    const normalizedFinish = PALETTE_FINISH_OPTIONS.includes(finish) ? finish : "メタリック";
    const normalizedValue = String(rawValue || "").replace(/^\d+\./, "").trim();

    if (normalizedFinish === "メタリック" && PALETTE_METAL_COLOR_NAME_SET.has(normalizedValue)) {
        return "メタル";
    }

    return normalizedFinish;
}

function syncPaletteDetailControlState(config) {
    const modeElement = document.getElementById(config.modeId);
    const finishElement = document.getElementById(config.finishId);
    const valueSelectElement = document.getElementById(config.valueSelectId);
    const valueInputElement = document.getElementById(config.valueInputId);
    const normalizedMode = PALETTE_DETAIL_MODES.includes(modeElement?.value) ? modeElement.value : "jm";
    if (!finishElement || !valueSelectElement || !valueInputElement) {
        return;
    }

    const usesSelectValue = normalizedMode === "jm";
    finishElement.disabled = false;
    valueSelectElement.hidden = !usesSelectValue;
    valueSelectElement.disabled = !usesSelectValue;
    valueInputElement.hidden = usesSelectValue;
    valueInputElement.disabled = usesSelectValue;

    renderPaletteDetailValueOptions(valueSelectElement, finishElement.value);

    if (usesSelectValue) {
        valueInputElement.value = "";
        return;
    }

    valueInputElement.placeholder = PALETTE_VALUE_PLACEHOLDERS[normalizedMode] || PALETTE_VALUE_PLACEHOLDERS.rgb;
}

function renderPaletteDetailValueOptions(selectElement, finish) {
    const options = PALETTE_VALUE_OPTIONS_BY_FINISH[finish] || [];
    const previousValue = selectElement.value;
    selectElement.replaceChildren();

    if (finish !== "純正") {
        const placeholderOption = document.createElement("option");
        placeholderOption.value = "";
        placeholderOption.textContent = "選択してください";
        selectElement.appendChild(placeholderOption);
    }

    options.forEach((optionValue) => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        selectElement.appendChild(option);
    });

    if (options.includes(previousValue)) {
        selectElement.value = previousValue;
    } else if (finish === "純正") {
        selectElement.value = "純正";
    } else {
        selectElement.value = "";
    }
}

function getPaletteDetailRawValue(mode, valueSelectElement, valueInputElement) {
    if (mode === "jm") {
        return String(valueSelectElement?.value || "").trim();
    }

    return String(valueInputElement?.value || "").trim();
}

function findPaletteDetailFieldConfigByElementId(elementId) {
    return PALETTE_DETAIL_FIELD_CONFIGS.find((config) => (
        config.modeId === elementId
        || config.finishId === elementId
        || config.valueSelectId === elementId
        || config.valueInputId === elementId
    )) || null;
}

function findPaletteSwatchFieldConfigByElementId(elementId) {
    return PALETTE_SWATCH_FIELD_CONFIGS.find((config) => (
        config.modeId === elementId
        || config.pickerId === elementId
        || config.inputId === elementId
    )) || null;
}

function buildPaletteSwatchesFromForm(name, accent) {
    return PALETTE_SWATCH_FIELD_CONFIGS
        .map((config, index) => buildPaletteSwatchFromConfig(config, index === 0 ? (accent || name) : `${accent || name} 2`))
        .filter(Boolean);
}

function buildPaletteSwatchFromConfig(config, fallbackLabel) {
    const inputElement = document.getElementById(config.inputId);
    if (!inputElement) {
        return null;
    }

    const rawValue = String(inputElement.value || "").trim();
    if (!rawValue) {
        return null;
    }

    const normalized = normalizePaletteSwatchInputValue(config, rawValue);
    if (!normalized) {
        return null;
    }

    return {
        label: normalized.displayValue || fallbackLabel,
        hex: normalized.hexValue,
    };
}

function getPaletteSwatchCodeMode(config) {
    const modeElement = document.getElementById(config.modeId);
    return PALETTE_SWATCH_CODE_MODES.includes(modeElement?.value) ? modeElement.value : "hex";
}

function updatePaletteSwatchInputPlaceholder(config) {
    const inputElement = document.getElementById(config.inputId);
    if (!inputElement) {
        return;
    }

    const mode = getPaletteSwatchCodeMode(config);
    inputElement.placeholder = mode === "rgb" ? PALETTE_VALUE_PLACEHOLDERS.rgb : PALETTE_VALUE_PLACEHOLDERS.hex;
}

function syncPaletteSwatchInputFromPicker(config) {
    const inputElement = document.getElementById(config.inputId);
    const pickerElement = document.getElementById(config.pickerId);
    if (!inputElement || !pickerElement) {
        return;
    }

    updatePaletteSwatchInputPlaceholder(config);
    inputElement.value = formatPaletteSwatchValueForMode(getPaletteSwatchCodeMode(config), pickerElement.value);
}

function normalizePaletteSwatchInputValue(config, rawValue) {
    const mode = getPaletteSwatchCodeMode(config);
    if (mode === "rgb") {
        const normalizedRgb = normalizeRgbText(rawValue);
        const normalizedHex = rgbTextToHex(normalizedRgb);
        if (!normalizedRgb || !normalizedHex) {
            return null;
        }

        return { displayValue: normalizedRgb, hexValue: normalizedHex };
    }

    const normalizedHex = normalizeHexColor(rawValue);
    if (!normalizedHex) {
        return null;
    }

    return { displayValue: normalizedHex, hexValue: normalizedHex };
}

function formatPaletteSwatchValueForMode(mode, hexValue) {
    const normalizedHex = normalizeHexColor(hexValue);
    if (!normalizedHex) {
        return "";
    }

    return mode === "rgb" ? hexToRgbText(normalizedHex) : normalizedHex;
}

function buildPaletteValueOptionsByFinish() {
    const metalSet = new Set(PALETTE_METAL_COLOR_NAMES);
    const classic = [];
    const matte = [];
    const metal = [];
    const chameleon = [];

    JIM_PAINT_NAME_SUGGESTIONS.forEach((name) => {
        if (!name) {
            return;
        }

        if (name.startsWith("マット")) {
            matte.push(formatPalettePaintNameWithId(name));
            return;
        }

        if (metalSet.has(name)) {
            metal.push(formatPalettePaintNameWithId(name));
            return;
        }

        if (isPaletteChameleonColor(name)) {
            chameleon.push(formatPalettePaintNameWithId(name));
            return;
        }

        classic.push(formatPalettePaintNameWithId(name));
    });

    return {
        純正: ["純正"],
        クラシック: classic,
        マット: matte,
        メタリック: classic,
        メタル: metal,
        カメレオン: chameleon,
    };
}

function isPaletteChameleonColor(name) {
    return name.startsWith("アノダイズド")
        || name.includes("フリップ")
        || name.endsWith("パール")
        || name.endsWith("プリズマティック")
        || name.startsWith("ブラック・")
        || name.startsWith("ホワイト・")
        || PALETTE_CHAMELEON_SPECIAL_NAMES.has(name);
}

function parseOrderSheet(rawText) {
    const lines = extractOrderLines(rawText);
    const selectionSuggestion = { exteriorCount: 0, paintCount: 0 };
    const requiredCounts = new Map();
    const entries = [];
    const unknownLines = [];

    lines.forEach((line) => {
        const match = line.match(/^(.*?)\s*-\s*\[(.*?)\]$/);
        if (!match) {
            unknownLines.push(line);
            return;
        }

        const rawCategory = match[1].trim();
        const detail = match[2].trim();
        const rule = findMatchingOrderRule(rawCategory);

        if (!rule) {
            unknownLines.push(line);
            return;
        }

        if (rule.billingBucket === "paint") {
            selectionSuggestion.paintCount += 1;
        } else {
            selectionSuggestion.exteriorCount += 1;
        }

        requiredCounts.set(
            rule.requiredItemKey,
            Number(requiredCounts.get(rule.requiredItemKey) || 0) + 1
        );

        entries.push({
            rawCategory,
            detail,
            billingBucket: rule.billingBucket,
            requiredItemKey: rule.requiredItemKey,
            estimatedPrice: getBucketUnitPrice(rule.billingBucket),
        });
    });

    const requiredItems = Array.from(requiredCounts.entries())
        .map(([key, count]) => ({ key, count }))
        .sort((left, right) => right.count - left.count || left.key.localeCompare(right.key));

    return {
        entries,
        requiredItems,
        unknownLines,
        selectionSuggestion,
        estimatedTotal: entries.reduce((total, entry) => total + entry.estimatedPrice, 0),
        lineCount: lines.length,
    };
}

function refreshOrderResultPrices() {
    if (!state.orderResult.entries.length) {
        return;
    }

    state.orderResult.entries = state.orderResult.entries.map((entry) => ({
        ...entry,
        estimatedPrice: getBucketUnitPrice(entry.billingBucket),
    }));
    state.orderResult.estimatedTotal = state.orderResult.entries.reduce((total, entry) => total + entry.estimatedPrice, 0);
}

function buildSelectionsFromOrderSuggestion(selectionSuggestion) {
    const nextSelections = {};

    EXTERIOR_SLOT_IDS.slice(0, selectionSuggestion.exteriorCount).forEach((slotId) => {
        nextSelections[slotId] = 1;
    });

    PAINT_SLOT_IDS.slice(0, selectionSuggestion.paintCount).forEach((slotId) => {
        nextSelections[slotId] = 1;
    });

    return nextSelections;
}

function findMatchingOrderRule(categoryText) {
    return ORDER_RULE_LOOKUP.get(normalizeMatchValue(categoryText)) || null;
}

function extractOrderLines(rawText) {
    const cleaned = String(rawText || "")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/\u200b/g, "")
        .trim();

    if (!cleaned) {
        return [];
    }

    const structured = tryExtractStructuredClipboard(cleaned);
    if (structured.length) {
        return structured.filter(Boolean);
    }

    const inlineMatches = cleaned.match(/[^,\n]+?\s*-\s*\[[^\]]+\]/g);
    if (inlineMatches && inlineMatches.length > 1) {
        return inlineMatches.map((line) => line.trim()).filter(Boolean);
    }

    return cleaned
        .split(/\r?\n/)
        .map((line) => line.trim())
        .flatMap((line) => splitQuotedLine(line))
        .map((line) => line.replace(/^["']|["'],?$/g, "").trim())
        .filter(Boolean);
}

function tryExtractStructuredClipboard(text) {
    const attempts = [text];
    if (text.includes('\\"')) {
        attempts.push(text.replace(/\\"/g, '"'));
    }

    for (const candidate of attempts) {
        try {
            const parsed = JSON.parse(candidate);
            const flattened = flattenClipboardPayload(parsed);
            if (flattened.length) {
                return flattened;
            }
        } catch {
            // ignore malformed JSON-like clipboard payloads
        }
    }

    const quotedMatches = [...text.matchAll(/["']([^"']+? - \[[^\]]+\])["']/g)].map((match) => match[1]);
    return quotedMatches;
}

function flattenClipboardPayload(payload) {
    if (Array.isArray(payload)) {
        return payload.flatMap((entry) => flattenClipboardPayload(entry));
    }
    if (typeof payload === "string") {
        return payload.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    }
    return [];
}

function splitQuotedLine(line) {
    if (line.includes('","')) {
        return line.split('","');
    }
    return [line];
}

function exportBillingConfig() {
    const payload = {
        version: 2,
        exportedAt: new Date().toISOString(),
        prices: state.prices,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "jim-mechanic-billing-prices.json";
    link.click();
    URL.revokeObjectURL(url);
}

function importBillingConfig(event) {
    const [file] = event.target.files || [];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            state.prices = sanitizePrices(parsed.prices || parsed);
            savePrices();
            refreshOrderResultPrices();
            renderBilling();
            renderOrder();
        } catch {
            window.alert("JSON の読み込みに失敗しました。価格設定の JSON を選んでください。");
        } finally {
            elements.billingImportInput.value = "";
        }
    };
    reader.readAsText(file, "utf-8");
}

function exportColorGuideConfig() {
    const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        entries: state.colorGuide,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "jim-mechanic-color-guide.json";
    link.click();
    URL.revokeObjectURL(url);
}

function exportNotesConfig() {
    const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        notes: state.notes,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "jim-mechanic-memo.json";
    link.click();
    URL.revokeObjectURL(url);
}

function importNotesConfig(event) {
    const [file] = event.target.files || [];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const rawText = String(reader.result || "");
            let parsed;

            try {
                parsed = JSON.parse(rawText);
            } catch {
                parsed = {
                    title: file.name.replace(/\.[^.]+$/, ""),
                    body: rawText,
                    updatedAt: new Date().toISOString(),
                };
            }

            state.notes = sanitizeNotesData(parsed.notes || parsed);
            saveNotes();
            renderNotes(true);
        } catch {
            window.alert("メモの読み込みに失敗しました。JSON またはテキストファイルを選んでください。");
        } finally {
            elements.notesImportInput.value = "";
        }
    };
    reader.readAsText(file, "utf-8");
}

function importColorGuideConfig(event) {
    const [file] = event.target.files || [];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            state.colorGuide = mergeColorGuideEntries(parsed.entries || parsed.colorGuide || parsed);
            saveColorGuide();
            renderColorGuide();
        } catch {
            window.alert("JSON の読み込みに失敗しました。カラー表の JSON を選んでください。");
        } finally {
            elements.paletteImportInput.value = "";
        }
    };
    reader.readAsText(file, "utf-8");
}

function loadPrices() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.prices));
        return sanitizePrices(stored);
    } catch {
        return { ...DEFAULT_PRICES };
    }
}

function loadSelections() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.selections));
        if (stored && typeof stored === "object") {
            return stored;
        }
    } catch {
        // ignore broken localStorage state
    }
    return {};
}

function savePrices() {
    localStorage.setItem(STORAGE_KEYS.prices, JSON.stringify(state.prices));
}

function saveSelections() {
    localStorage.setItem(STORAGE_KEYS.selections, JSON.stringify(state.selections));
}

function loadColorGuide() {
    let stored = null;
    try {
        stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.colorGuide));
    } catch {
        stored = null;
    }

    const mergedEntries = mergeColorGuideEntries(stored);
    return seedColorGuideEntriesOnce(mergedEntries);
}

function saveColorGuide() {
    localStorage.setItem(STORAGE_KEYS.colorGuide, JSON.stringify(state.colorGuide));
}

function loadNotes() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.notes));
        return sanitizeNotesData(stored);
    } catch {
        return { ...DEFAULT_NOTES };
    }
}

function saveNotes() {
    localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(state.notes));
}

function mergeColorGuideEntries(storedEntries) {
    const defaultIds = new Set(DEFAULT_COLOR_GUIDE_ENTRIES.map((entry) => entry.id));
    if (!Array.isArray(storedEntries)) {
        return [];
    }

    return storedEntries
        .map((entry) => sanitizeColorGuideEntry(entry))
        .filter((entry) => entry && !defaultIds.has(entry.id) && !isRemovedColorGuideEntry(entry));
}

function seedColorGuideEntriesOnce(entries) {
    const currentVersion = localStorage.getItem(STORAGE_KEYS.colorGuideSeedVersion);
    if (currentVersion === COLOR_GUIDE_SEED_VERSION) {
        return entries;
    }

    const nextEntries = [...entries];
    const existingKeys = new Set(nextEntries.map((entry) => buildColorGuideSeedMatchKey(entry)));

    COLOR_GUIDE_SEED_ENTRIES.forEach((entry) => {
        const sanitizedEntry = sanitizeColorGuideEntry(entry);
        if (!sanitizedEntry) {
            return;
        }

        const matchKey = buildColorGuideSeedMatchKey(sanitizedEntry);
        if (existingKeys.has(matchKey)) {
            return;
        }

        nextEntries.push(sanitizedEntry);
        existingKeys.add(matchKey);
    });

    localStorage.setItem(STORAGE_KEYS.colorGuideSeedVersion, COLOR_GUIDE_SEED_VERSION);
    localStorage.setItem(STORAGE_KEYS.colorGuide, JSON.stringify(nextEntries));
    return nextEntries;
}

function buildColorGuideSeedMatchKey(entry) {
    return `${String(entry?.category || "").trim()}::${String(entry?.name || "").trim()}`;
}

function isRemovedColorGuideEntry(entry) {
    if (!entry) {
        return false;
    }

    const id = String(entry.id || "").trim();
    if (REMOVED_COLOR_GUIDE_ENTRY_IDS.has(id)) {
        return true;
    }

    return REMOVED_COLOR_GUIDE_ENTRY_KEYS.has(buildColorGuideSeedMatchKey(entry));
}

function cloneColorGuideEntries(entries) {
    return JSON.parse(JSON.stringify(entries));
}

function sanitizeNotesData(source) {
    if (!source || typeof source !== "object") {
        return { ...DEFAULT_NOTES };
    }

    const updatedAtDate = new Date(source.updatedAt || "");
    return {
        title: String(source.title || "").trim(),
        body: String(source.body || "").replace(/\r\n?/g, "\n"),
        updatedAt: Number.isNaN(updatedAtDate.getTime()) ? "" : updatedAtDate.toISOString(),
    };
}

function sanitizeColorGuideEntry(source) {
    if (!source || typeof source !== "object") {
        return null;
    }

    const name = String(source.name || "").trim();
    if (!name) {
        return null;
    }

    const category = PALETTE_CATEGORIES.includes(source.category) ? source.category : PALETTE_CATEGORIES[0];
    const details = Array.isArray(source.details)
        ? source.details
            .map((detail) => {
                const label = String(detail?.label || "").trim();
                const value = String(detail?.value || "").trim();
                if (!label || !value) {
                    return null;
                }
                return { label, value };
            })
            .filter(Boolean)
        : [];

    const swatches = Array.isArray(source.swatches)
        ? source.swatches
            .map((swatch) => {
                const hex = normalizeHexColor(swatch?.hex || "");
                if (!hex) {
                    return null;
                }

                const hexB = normalizeHexColor(swatch?.hexB || "");
                return {
                    label: String(swatch?.label || "").trim(),
                    hex,
                    hexB,
                };
            })
            .filter(Boolean)
        : [];

    let pickerHex = normalizeHexColor(source.pickerHex || "");
    let pickerRgb = normalizeRgbText(source.pickerRgb || "");

    if (!pickerHex && pickerRgb) {
        pickerHex = rgbTextToHex(pickerRgb);
    }

    if (!pickerRgb && pickerHex) {
        pickerRgb = hexToRgbText(pickerHex);
    }

    return {
        id: String(source.id || createColorGuideEntryId()),
        category,
        name,
        accent: String(source.accent || "").trim(),
        details,
        swatches,
        note: String(source.note || "").trim(),
        pickerRgb,
        pickerHex,
        custom: Boolean(source.custom),
    };
}

function findColorGuideEntry(entryId) {
    return state.colorGuide.find((entry) => entry.id === entryId) || null;
}

function parsePaletteExtraDetails(text) {
    return String(text || "")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const separator = line.includes("：") ? "：" : line.includes(":") ? ":" : null;
            if (!separator) {
                return { label: "詳細", value: line };
            }

            const [label, ...valueParts] = line.split(separator);
            const value = valueParts.join(separator).trim();
            if (!label.trim() || !value) {
                return null;
            }

            return { label: label.trim(), value };
        })
        .filter(Boolean);
}

function createColorGuideEntryId() {
    return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeHexColor(value) {
    const raw = String(value || "").trim().replace(/^#/, "");
    if (!raw) {
        return "";
    }

    const expanded = /^[0-9a-fA-F]{3}$/.test(raw)
        ? raw
            .split("")
            .map((char) => `${char}${char}`)
            .join("")
        : raw;

    if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
        return "";
    }

    return `#${expanded.toUpperCase()}`;
}

function normalizeRgbText(value) {
    const parts = extractRgbParts(value);
    if (!parts) {
        return "";
    }

    return `RGB(${parts.join(", ")})`;
}

function extractRgbParts(value) {
    const matches = String(value || "").match(/\d{1,3}/g);
    if (!matches || matches.length < 3) {
        return null;
    }

    const parts = matches.slice(0, 3).map(Number);
    if (parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) {
        return null;
    }

    return parts;
}

function hexToRgbText(hexColor) {
    const normalized = normalizeHexColor(hexColor);
    if (!normalized) {
        return "";
    }

    const parts = [
        parseInt(normalized.slice(1, 3), 16),
        parseInt(normalized.slice(3, 5), 16),
        parseInt(normalized.slice(5, 7), 16),
    ];

    return `RGB(${parts.join(", ")})`;
}

function rgbTextToHex(rgbText) {
    const parts = extractRgbParts(rgbText);
    if (!parts) {
        return "";
    }

    return `#${parts.map((part) => part.toString(16).padStart(2, "0").toUpperCase()).join("")}`;
}

function buildNotesClipboardText(notes) {
    return [notes.title, notes.body].filter(Boolean).join("\n\n").trim();
}

function formatNotesStatus(notes) {
    if (!notes.title && !notes.body) {
        return "空欄";
    }

    if (!notes.updatedAt) {
        return "保存済み";
    }

    return `保存 ${formatNotesTimestamp(notes.updatedAt)}`;
}

function formatNotesTimestamp(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return "保存済み";
    }

    return date.toLocaleString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

async function copyTextToClipboard(value) {
    const text = String(value || "").trim();
    if (!text) {
        return false;
    }

    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            // fall back to execCommand
        }
    }

    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "readonly");
    helper.style.position = "fixed";
    helper.style.top = "-9999px";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();

    let copied = false;
    try {
        copied = document.execCommand("copy");
    } catch {
        copied = false;
    }

    document.body.removeChild(helper);
    return copied;
}

function flashCopyButton(button) {
    const originalLabel = button.dataset.originalLabel || button.textContent;
    button.dataset.originalLabel = originalLabel;
    button.textContent = "コピー済み";
    button.disabled = true;

    window.setTimeout(() => {
        button.textContent = originalLabel;
        button.disabled = false;
    }, 1400);
}

function cleanupSelections() {
    Object.keys(state.selections).forEach((itemId) => {
        const quantity = getSelectionQuantity(itemId);
        if (!KNOWN_SELECTION_IDS.has(itemId) || quantity <= 0) {
            delete state.selections[itemId];
            return;
        }

        state.selections[itemId] = isQuantityEnabledItem(itemId) ? quantity : 1;
    });
}

function sanitizePrices(source) {
    const nextPrices = { ...DEFAULT_PRICES };
    if (!source || typeof source !== "object") {
        return nextPrices;
    }

    Object.keys(DEFAULT_PRICES).forEach((key) => {
        const numeric = Number(source[key]);
        if (Number.isFinite(numeric) && numeric >= 0) {
            nextPrices[key] = Math.floor(numeric);
        }
    });

    return nextPrices;
}

function buildBillingItemMeta() {
    const meta = {};

    BILLING_TIER_ROWS.forEach((row) => {
        row.cells.forEach((cellId, index) => {
            if (!cellId) {
                return;
            }
            meta[cellId] = {
                label: `${row.label} ${BILLING_TIER_COLUMNS[index]}`,
                priceKey: cellId,
            };
        });
    });

    BILLING_FIXED_ITEMS.forEach((item) => {
        meta[item.id] = {
            label: item.label,
            priceKey: item.id,
            quantityEnabled: Boolean(item.quantityEnabled),
        };
    });

    EXTERIOR_SLOT_IDS.forEach((slotId, index) => {
        meta[slotId] = {
            label: `外装系カスタム ${index + 1}`,
            priceKey: "exterior_custom_unit",
        };
    });

    PAINT_SLOT_IDS.forEach((slotId, index) => {
        meta[slotId] = {
            label: `塗装 ${index + 1}`,
            priceKey: "paint_custom_unit",
        };
    });

    return meta;
}

function buildOrderRuleLookup() {
    const lookup = new Map();
    ORDER_CATEGORY_RULES.forEach((rule) => {
        rule.aliases.forEach((alias) => {
            lookup.set(normalizeMatchValue(alias), rule);
        });
    });
    return lookup;
}

function getPriceForItem(itemId) {
    const meta = BILLING_ITEM_META[itemId];
    if (!meta) {
        return 0;
    }
    return Number(state.prices[meta.priceKey] || 0);
}

function getBucketUnitPrice(bucket) {
    if (bucket === "paint") {
        return Number(state.prices.paint_custom_unit || 0);
    }
    return Number(state.prices.exterior_custom_unit || 0);
}

function createEmptyOrderResult() {
    return {
        entries: [],
        requiredItems: [],
        unknownLines: [],
        selectionSuggestion: { exteriorCount: 0, paintCount: 0 },
        estimatedTotal: 0,
        lineCount: 0,
    };
}

function isQuantityEnabledItem(itemId) {
    return QUANTITY_ENABLED_ITEMS.has(itemId);
}

function getSelectionQuantity(itemId) {
    const rawValue = Number(state.selections[itemId]);
    if (!Number.isFinite(rawValue) || rawValue <= 0) {
        return 0;
    }

    if (isQuantityEnabledItem(itemId)) {
        return Math.max(1, Math.floor(rawValue));
    }

    return 1;
}

function isWhitePassExcludedItem(itemId) {
    return itemId.startsWith("paint_custom_") || WHITE_PASS_EXCLUDED_ITEMS.has(itemId);
}

function resolveTierCellIcon(groupId, cellId) {
    return `${IMAGE_BASE}${cellId}.png`;
}

function updateCumulativeSlots(slotIds, itemId, isChecked) {
    const targetIndex = slotIds.indexOf(itemId);
    if (targetIndex === -1) {
        return;
    }

    const nextCount = isChecked ? targetIndex + 1 : targetIndex;
    slotIds.forEach((slotId, index) => {
        if (index < nextCount) {
            state.selections[slotId] = 1;
        } else {
            delete state.selections[slotId];
        }
    });
}

function renderBillingHeaderLabel(label, iconPath, iconAlt) {
    return `
        <span class="billing-title-with-icon">
            <span class="billing-title-icon"><img src="${iconPath}" alt="${escapeHtml(iconAlt)}"></span>
            <span>${escapeHtml(label)}</span>
        </span>
    `;
}

function renderBillingRowLabel(label, iconPath, iconAlt) {
    return `
        <span class="billing-row-label">
            <span class="billing-row-icon"><img src="${iconPath}" alt="${escapeHtml(iconAlt)}"></span>
            <span>${escapeHtml(label)}</span>
        </span>
    `;
}

function renderFixedItemRow(item, index) {
    const quantity = getSelectionQuantity(item.id);
    const checked = quantity > 0;
    const stripedClass = index % 2 === 0 ? "billing-fixed-row even" : "billing-fixed-row odd";
    const quantityMarkup = item.quantityEnabled
        ? `
            <label class="billing-fixed-qty">
                <span>個数</span>
                <input type="number" min="1" step="1" inputmode="numeric" data-role="billing-quantity" data-item-id="${item.id}" value="${quantity || 1}">
            </label>
        `
        : `<span class="billing-fixed-qty-placeholder"></span>`;

    return `
        <div class="${stripedClass}">
            <label class="billing-fixed-label" for="toggle-${item.id}">
                <span class="billing-row-icon"><img src="${item.icon}" alt="${escapeHtml(item.label)}"></span>
                <span>${escapeHtml(item.label)}</span>
            </label>
            <span class="billing-fixed-price">${formatNumber(getPriceForItem(item.id))}</span>
            ${quantityMarkup}
            <input id="toggle-${item.id}" type="checkbox" data-role="billing-toggle" data-item-id="${item.id}" ${checked ? "checked" : ""}>
        </div>
    `;
}

function chunkBySize(items, size) {
    const chunks = [];
    for (let index = 0; index < items.length; index += size) {
        chunks.push(items.slice(index, index + size));
    }
    return chunks;
}

function formatCurrency(value) {
    return `¥${currencyFormatter.format(Number(value || 0))}`;
}

function formatPlainCurrencyValue(value) {
    const numeric = Number(String(value || "0").replace(/[^\d.-]/g, ""));
    return String(Math.max(0, Math.round(Number.isFinite(numeric) ? numeric : 0)));
}

function formatNumber(value) {
    return currencyFormatter.format(Number(value || 0));
}

function formatTierPrice(value) {
    const numeric = Number(value || 0);
    if (numeric >= 100000 && numeric % 10000 === 0) {
        return `${currencyFormatter.format(numeric / 10000)}万`;
    }
    return formatNumber(numeric);
}

function normalizeMatchValue(value) {
    return String(value || "")
        .replace(/\u3000/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

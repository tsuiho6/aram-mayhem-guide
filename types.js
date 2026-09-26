// @ts-check

/**
 * 这个文件只保存共享的数据契约，不参与页面运行。
 * 页面仍然使用 JavaScript；编辑器通过这些 JSDoc 提前提示字段缺失或类型错误。
 */

/** @typedef {"白银"|"黄金"|"棱彩"} AugmentRarity */
/** @typedef {"SS"|"S"|"A"|"B"|"C"|"待定"} HeroTier */

/**
 * @typedef {Object} BuildItem
 * @property {number|string} id
 * @property {string} name
 */

/** @typedef {string|BuildItem} BuildItemRef */

/**
 * @typedef {Object} AugmentBuildGuide
 * @property {string} id
 * @property {string} title
 * @property {string[]} requiredAugments
 * @property {string[]} [synergyAugments]
 * @property {string} tier
 * @property {BuildItemRef[]} items
 * @property {string} note
 * @property {string} sourceType
 * @property {string} source
 */

/**
 * @typedef {Object} HeroStats
 * @property {string} winRate
 * @property {string} pickRate
 * @property {number|string} sample
 */

/**
 * @typedef {Object} HeroAugment
 * @property {number|string} [id]
 * @property {string} name
 * @property {string} [nameEn]
 * @property {AugmentRarity} [rarity]
 * @property {string} [tier]
 * @property {string} [winRate]
 * @property {string} [pickRate]
 * @property {number} [sample]
 * @property {string} [note]
 */

/**
 * @typedef {Object} BuildRoute
 * @property {string} [id]
 * @property {string} label
 * @property {BuildItemRef[]} items
 * @property {string} note
 * @property {{winRate:string,pickRate:string,sample:number}|null} [metric]
 */

/**
 * @typedef {Object} SituationRoute
 * @property {string} id
 * @property {string} label
 * @property {BuildItemRef[]} items
 * @property {string} note
 */

/**
 * @typedef {Object} Hero
 * @property {string} id
 * @property {string} name
 * @property {string} alias
 * @property {string} initial
 * @property {string} avatar
 * @property {string[]} roles
 * @property {HeroTier} tier
 * @property {string} tierClass
 * @property {string[]} tags
 * @property {string} note
 * @property {HeroStats} stats
 * @property {HeroAugment[]} coreAugments
 * @property {BuildRoute[]} builds
 * @property {SituationRoute[]} situations
 * @property {string} [dataState]
 * @property {string} [source]
 */

/**
 * @typedef {Object} AugmentRanking
 * @property {number} rank
 * @property {number|string} [id]
 * @property {string} name
 * @property {string} [nameEn]
 * @property {AugmentRarity} color
 * @property {string} [strength]
 * @property {string} [tierClass]
 * @property {string[]} heroes
 * @property {string} note
 * @property {string} recommendationStatus
 * @property {string} [winRate]
 * @property {string} [pickRate]
 * @property {number} [sample]
 */

export {};

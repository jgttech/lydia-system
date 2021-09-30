export default (init, config) => (state=init, action) =>
    config != null && config.hasOwnProperty(action.type)
        ? config[action.type](state, action)
        : {...state};
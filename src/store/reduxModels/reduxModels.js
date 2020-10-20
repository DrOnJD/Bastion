const createAction = (type) => {
  const actionCreator = (Model, payload, meta) => typeof Model === 'function'
    ? ({
      type, model: Model, payload, meta: { ...meta, modelName: Model.name },
    })
    : ({ type, payload: Model, meta });
  actionCreator.toString = () => type.toString();
  return actionCreator;
};

const initState = (models) => models.reduce((prev, model) => ({ ...prev, [model.name]: { items: {}, meta: {} } }), {});

export {
  createAction,
  initState,
};

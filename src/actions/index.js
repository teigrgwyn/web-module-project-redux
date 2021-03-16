export const FEATURE_ADD = 'FEATURE_ADD';
export const FEATURE_REMOVE = 'FEATURE_REMOVE';

export const addFeature = feature => {
  return({ type:FEATURE_ADD, payload:feature });
}

export const removeFeature = feature => {
  return({ type:FEATURE_REMOVE, payload:feature });
}
export const isProductionEnv = process.env.NODE_ENV === 'production';
export const isDevelopmentEnv = !isProductionEnv;

export const port = parseInt(process.env.PORT ?? '3000', 10);

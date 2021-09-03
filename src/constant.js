export const developHost = 'http://120.78.175.175'
export const productionHost = 'http://120.78.175.175'

const develop = `${developHost}/marketingplus`
const production = `${productionHost}/marketingplus`

export const host = import.meta.env.MODE ? production : develop;
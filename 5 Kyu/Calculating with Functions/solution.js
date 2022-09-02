const g = (n) => (arg) => arg ? arg(n) : n;

const zero =  g(0);
const one   = g(1);
const two   = g(2);
const three = g(3);
const four  = g(4);
const five  = g(5);
const six   = g(6);
const seven = g(7);
const eight = g(8);
const nine  = g(9);

const f = Math.floor;
const plus      = a => b => f(b + a);
const minus     = a => b => f(b - a);
const times     = a => b => f(b * a);
const dividedBy = a => b => f(b / a);

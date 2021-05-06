import { IPointData, Point } from "@pixi/math";

export class Vector extends Point {
    constructor(x: number, y: number) {
        super(x, y);
    }
    multiply(v: number) {
        this.x *= v;
        this.y *= v;
        return this;
    }
    normalize() {
        return this.divide(this.length());
    }
    length() {
        return Math.sqrt(this.dot(this));
    }
    dot(v: IPointData) {
        return this.x * v.x + this.y * v.y;
    }
    divide(v: number) {
        if (v != 0) {
            this.x /= v;
            this.y /= v;
        }
        return this;
    }
    copy() {
        return new Vector(this.x, this.y);
    }
    add(v: IPointData) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
}

/* INSTANCE METHODS
Vector.prototype = {
    negative: function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    },
    add: function (v) {
        if (v instanceof Vector) {
            this.x += v.x;
            this.y += v.y;
        } else {
            this.x += v;
            this.y += v;
        }
        return this;
    },
    subtract: function (v) {
        if (v instanceof Vector) {
            this.x -= v.x;
            this.y -= v.y;
        } else {
            this.x -= v;
            this.y -= v;
        }
        return this;
    },
    equals: function (v) {
        return this.x == v.x && this.y == v.y;
    },

    cross: function (v) {
        return this.x * v.y - this.y * v.x;
    },
    min: function () {
        return Math.min(this.x, this.y);
    },
    max: function () {
        return Math.max(this.x, this.y);
    },
    toAngles: function () {
        return -Math.atan2(-this.y, this.x);
    },
    angleTo: function (a) {
        return Math.acos(this.dot(a) / (this.length() * a.length()));
    },
    toArray: function (n) {
        return [this.x, this.y].slice(0, n || 2);
    },
    clone: function () {
        return new Vector(this.x, this.y);
    },
    set: function (x, y) {
        this.x = x; this.y = y;
        return this;
    }
};
/* STATIC METHODS
Vector.negative = function (v) {
    return new Vector(-v.x, -v.y);
};
Vector.add = function (a, b) {
    if (b instanceof Vector)
        return new Vector(a.x + b.x, a.y + b.y);
    else
        return new Vector(a.x + b, a.y + b);
};
Vector.subtract = function (a, b) {
    if (b instanceof Vector)
        return new Vector(a.x - b.x, a.y - b.y);
    else
        return new Vector(a.x - b, a.y - b);
};
Vector.multiply = function (a, b) {
    if (b instanceof Vector)
        return new Vector(a.x * b.x, a.y * b.y);
    else
        return new Vector(a.x * b, a.y * b);
};
Vector.divide = function (a, b) {
    if (b instanceof Vector)
        return new Vector(a.x / b.x, a.y / b.y);
    else
        return new Vector(a.x / b, a.y / b);
};
Vector.equals = function (a, b) {
    return a.x == b.x && a.y == b.y;
};
Vector.dot = function (a, b) {
    return a.x * b.x + a.y * b.y;
};
Vector.cross = function (a, b) {
    return a.x * b.y - a.y * b.x;
};
*/

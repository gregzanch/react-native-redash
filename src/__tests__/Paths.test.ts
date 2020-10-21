import { serialize, parse, getYForX, curveLines } from "../Paths";
import { Vector } from "../Vectors";

import { d1, d2 } from "./paths";

// Graph line with random points
const vectors: Vector[] = [
  { x: 0, y: 192 },
  { x: 16.189944134078214, y: 192 },
  { x: 32.37988826815643, y: 192 },
  { x: 48.56983240223464, y: 192 },
  { x: 64.75977653631286, y: 192 },
  { x: 80.94972067039106, y: 192 },
  { x: 97.13966480446928, y: 192 },
  { x: 113.32960893854748, y: 192 },
  { x: 129.5195530726257, y: 192 },
  { x: 145.70949720670393, y: 192 },
  { x: 161.89944134078212, y: 192 },
  { x: 178.08938547486034, y: 192 },
  { x: 194.27932960893855, y: 192 },
  { x: 210.46927374301674, y: 192 },
  { x: 226.65921787709496, y: 192 },
  { x: 242.84916201117318, y: 192 },
  { x: 259.0391061452514, y: 192 },
  { x: 275.2290502793296, y: 192 },
  { x: 291.41899441340786, y: 192 },
  { x: 307.60893854748605, y: 192 },
  { x: 323.79888268156424, y: 192 },
  { x: 339.9888268156424, y: 192 },
  { x: 356.1787709497207, y: 192 },
  { x: 372.36871508379886, y: 192 },
  { x: 388.5586592178771, y: 192 },
  { x: 404.7486033519553, y: 192 },
  { x: 414, y: 192 },
];

test("parse()", () => {
  const path =
    "M150,0 C150,0 0,75 200,75 C75,200 200,225 200,225 C225,200 200,150 0,150 ";
  expect(serialize(parse(path))).toBe(path);
});

test("getYForX()", () => {
  const p1 = parse(
    "M150,0 C150,0 0,75 200,75 C75,200 200,225 200,225 C225,200 200,150 0,150"
  );
  expect(getYForX(p1, 200)).toBe(75);
  expect(getYForX(p1, 50)).toBe(151.160325);
  expect(() => getYForX(p1, 750)).toThrow();
});

test("getYForX2()", () => {
  const p1 = parse(d1);
  expect(getYForX(p1, 358.7)).toBeCloseTo(42.92573877023815, 4);
  expect(getYForX(p1, 358.8)).toBeCloseTo(42.90651208682783, 4);
  expect(getYForX(p1, 359)).toBeCloseTo(42.878457025833086, 4);
});

test("getYForX3()", () => {
  const p2 = parse(d2);
  expect(getYForX(p2, 414)).toBe(15.75);
});

test("curveLines(simple)", () => {
  expect(curveLines(vectors, 0.1, "simple")).toEqual(
    parse(
      // eslint-disable-next-line max-len
      "M 0,192 Q 7.285474860335196,192 16.189944134078214,192 Q 24.28491620111732,192 32.37988826815643,192 Q 40.47486033519553,192 48.56983240223464,192 Q 56.66480446927375,192 64.75977653631286,192 Q 72.85474860335196,192 80.94972067039106,192 Q 89.04469273743017,192 97.13966480446928,192 Q 105.23463687150837,192 113.32960893854748,192 Q 121.42458100558659,192 129.5195530726257,192 Q 137.6145251396648,192 145.70949720670393,192 Q 153.80446927374302,192 161.89944134078212,192 Q 169.99441340782124,192 178.08938547486034,192 Q 186.18435754189943,192 194.27932960893855,192 Q 202.37430167597765,192 210.46927374301674,192 Q 218.56424581005587,192 226.65921787709496,192 Q 234.75418994413405,192 242.84916201117318,192 Q 250.9441340782123,192 259.0391061452514,192 Q 267.13407821229055,192 275.2290502793296,192 Q 283.32402234636874,192 291.41899441340786,192 Q 299.5139664804469,192 307.60893854748605,192 Q 315.70391061452517,192 323.79888268156424,192 Q 331.8938547486033,192 339.9888268156424,192 Q 348.08379888268155,192 356.1787709497207,192 Q 364.2737430167598,192 372.36871508379886,192 Q 380.463687150838,192 388.5586592178771,192 Q 397.00055865921786,192 404.7486033519553,192 Q 410.1837988826816,192 414,192"
    )
  );
});

test("curveLines(complex)", () => {
  // Path generated by Rainbow react-native-animated-charts
  // using `svgBezierPath(points, 0.1, 'complex')`
  const referencePath =
    // eslint-disable-next-line max-len
    "M 0,192 C 1.6189944134078216,192 12.95195530726257,192 16.189944134078214,192 C 19.427932960893855,192 29.141899441340787,192 32.37988826815643,192 C 35.61787709497207,192 45.33184357541899,192 48.56983240223464,192 C 51.80782122905028,192 61.52178770949721,192 64.75977653631286,192 C 67.9977653631285,192 77.71173184357542,192 80.94972067039106,192 C 84.1877094972067,192 93.90167597765364,192 97.13966480446928,192 C 100.37765363128491,192 110.09162011173184,192 113.32960893854748,192 C 116.56759776536312,192 126.28156424581007,192 129.5195530726257,192 C 132.75754189944135,192 142.4715083798883,192 145.70949720670393,192 C 148.94748603351957,192 158.66145251396648,192 161.89944134078212,192 C 165.13743016759776,192 174.8513966480447,192 178.08938547486034,192 C 181.32737430167597,192 191.04134078212292,192 194.27932960893855,192 C 197.5173184357542,192 207.2312849162011,192 210.46927374301674,192 C 213.70726256983238,192 223.42122905027932,192 226.65921787709496,192 C 229.8972067039106,192 239.61117318435754,192 242.84916201117318,192 C 246.08715083798882,192 255.8011173184358,192 259.0391061452514,192 C 262.27709497206706,192 271.991061452514,192 275.2290502793296,192 C 278.46703910614525,192 288.1810055865922,192 291.41899441340786,192 C 294.6569832402235,192 304.3709497206704,192 307.60893854748605,192 C 310.8469273743017,192 320.5608938547486,192 323.79888268156424,192 C 327.0368715083799,192 336.7508379888268,192 339.9888268156424,192 C 343.22681564245806,192 352.94078212290503,192 356.1787709497207,192 C 359.4167597765363,192 369.1307262569832,192 372.36871508379886,192 C 375.6067039106145,192 385.32067039106147,192 388.5586592178771,192 C 391.79664804469274,192 402.20446927374303,192 404.7486033519553,192 C 407.29273743016756,192 413.0748603351955,192 414,192";
  expect(() => curveLines(vectors, 0.1, "complex")).not.toThrow();
  expect(curveLines(vectors, 0.1, "complex")).toEqual(parse(referencePath));
});

/*
svgBezierPath reference function from
https://github.com/rainbow-me/rainbow/blob/master/src/react-native-animated-charts/src/smoothing/smoothSVG.js

const controlPoint = (current, previous, next, reverse, smoothing) => {
  "worklet";
  const p = previous || current;
  const n = next || current;
  // Properties of the opposed-line
  const lengthX = n[0] - p[0];
  const lengthY = n[1] - p[1];
  const o = {
    angle: Math.atan2(lengthY, lengthX),
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
  };
  // If is end-control-point, add PI to the angle to go backward
  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};

export const svgBezierPath = (points, smoothing, strategy) => {
  "worklet";
  const traversed = points.map((p) => [p.x, p.y]);
  // build the d attributes by looping over the points
  return traversed.reduce((acc, point, i, a) => {
    if (i === 0) {
      return `M ${point[0]},${point[1]}`;
    } else {
      const cps = controlPoint(a[i - 1], a[i - 2], point, false, smoothing);
      const cpsX = cps[0];
      const cpsY = cps[1];

      const cpe = controlPoint(point, a[i - 1], a[i + 1], true, smoothing);
      const cpeX = cpe[0];
      const cpeY = cpe[1];
      if (strategy === "simple") {
        return `${acc} Q ${(cpsX + cpeX) / 2},${(cpsY + cpeY) / 2} ${
          point[0]
        },${point[1]}`;
      } else if (strategy === "complex") {
        return `${acc} C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
      } else if (strategy === "bezier") {
        const p0 = a[i - 2] || a[i - 1];
        const x0 = p0[0];
        const y0 = p0[1];
        const p1 = a[i - 1];
        const x1 = p1[0];
        const y1 = p1[1];
        const x = point[0];
        const y = point[1];
        const cp1x = (2 * x0 + x1) / 3;
        const cp1y = (2 * y0 + y1) / 3;
        const cp2x = (x0 + 2 * x1) / 3;
        const cp2y = (y0 + 2 * y1) / 3;
        const cp3x = (x0 + 4 * x1 + x) / 6;
        const cp3y = (y0 + 4 * y1 + y) / 6;
        if (i === a.length - 1) {
          return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${cp3x},${cp3y} C${x},${y} ${x},${y} ${x},${y}`;
        }
        return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${cp3x},${cp3y}`;
      }
      return null;
    }
  }, "");
};
*/

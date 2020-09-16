/*Numeric Enums*/
var Week;
(function (Week) {
    Week[Week["Sunday"] = 0] = "Sunday";
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
})(Week || (Week = {}));
/*Custom enums*/
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = 2] = "Saturday";
    Weekend[Weekend["Sunday"] = 3] = "Sunday";
})(Weekend || (Weekend = {}));
/*String Enums*/
var Marvel;
(function (Marvel) {
    Marvel["Tony"] = "Iron Man";
    Marvel["Scarlett"] = "Black Widow";
    Marvel["Ruffalo"] = "Hulk";
})(Marvel || (Marvel = {}));
/*Heterogeneous Enum*/
var Numbers;
(function (Numbers) {
    Numbers[Numbers["one"] = 1] = "one";
    Numbers["two"] = "TWO";
    Numbers[Numbers["three"] = 3] = "three";
})(Numbers || (Numbers = {}));
/*Computed Enums*/
var Area;
(function (Area) {
    Area[Area["square"] = 1] = "square";
    Area[Area["semicircle"] = getarea(3)] = "semicircle";
    Area[Area["circle"] = Area.semicircle * 2] = "circle";
})(Area || (Area = {}));
function getarea(r) {
    if (r != null) {
        return 3.14 * r * r;
    }
}
Area.square; // returns 3
Area.circle; // returns 120
//# sourceMappingURL=Enums.js.map
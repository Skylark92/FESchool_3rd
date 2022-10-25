function RandomMenuRobot(menu) {
    this.menu = menu;
}

const 메뉴 = ["마라탕", "짜파게티", "국밥", "짬뽕", "죽"];

const test = new RandomMenuRobot(메뉴);
const test1 = new RandomMenuRobot(메뉴);

RandomMenuRobot.prototype.pick = function (menus) {
    return menus[~~(Math.random() * menus.length)];
};

console.log(test.pick);
console.log(test1.pick);

console.log(test.pick === test1.pick);
console.log(RandomMenuRobot.pick);

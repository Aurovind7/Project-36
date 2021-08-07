class Food {
  constructor() {
    this.foodStock = 0;
    this.lastFed;
    this.milkBottle = loadImage("Virtual-Pet--1-master/images/Milk.png");
  }

  getFoodStock(foodStock) {
    return this.foodStock;
  }

  updateFoodStock(foodStock) {
    this.foodStock = foodStock;
  }

  deductFood() {
    if (this.foodStock > 0) {
      this.foodStock = this.foodStock - 1;
    }
  }

  getFedTime(lastFed) {
    this.lastFed = lastFed;
  }

  display() {
    var x = 80;
    var y = 100;
    image(this.image, 720, 220, 70, 70);
    if (this.foodStock != 0) {
      for (var i = 0; i < this.foodStock; i++) {
        if (i % 10 == 0) {
          x = 80;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x + 30;
      }
    }
  }
}

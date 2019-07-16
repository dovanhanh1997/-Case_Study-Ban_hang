let Product = function (cost, name, ram, memory, sizescreen, typescreen, image) {
    this.name = name;
    this.cost = cost;
    this.ram = ram;
    this.memory = memory;
    this.sizescreen = sizescreen;
    this.typescreen = typescreen;
    this.image = '<image src="' + this.name + '.PNG" height="180" width="150">';

    this.getName = function () {
        return this.name;
    };

    this.getCost = function () {
        return this.cost
    };
};

let App = function () {
    this.product = [];

    this.disPlay = function () {
        document.getElementById("total-product").innerHTML = this.product.length + "";
        let html = '';
        if (this.product.length > 0) {
            let sum = 0;
            for (let i = 0; i < this.product.length; i++) {
                html += "<tr>";
                html += "<td>" + this.product[i].getName() + "</td>";
                html += "<td>" + formatNumber(this.product[i].getCost()) + "đ</td>";
                html += "<td><button onclick='app.detail(" + i + ")'>Detail</button></td>";
                html += "<td><button onclick='app.delte(" + i + ")'>Delte</button></td>";
                html += "</tr>";
                sum += this.product[i].cost;
            }
            html += "<tr>";
            html += "<td>Total</td>";
            html += "<td colspan='2'>" + formatNumber(sum) + "</td>";
            html += "<td><button onclick='app.BuyProducts()'>Buy</button></td>";
            html += "</tr>";
            document.getElementById("list-product").innerHTML = html;
        } else {
            html += "Không có sản phẩm";
            document.getElementById("list-product").innerHTML = html;
        }
    };

    this.add = function (cost, name, ram, memory, sizescreen, typescreen) {
        let product = new Product(cost, name, ram, memory, sizescreen, typescreen);
        this.product.push(product);
        this.disPlay();
    };

    this.delte = function (index) {
        this.product.splice(index, 1);
        this.disPlay();
    };

    this.detail = function (index) {
        document.getElementById("showDetail").innerHTML = '<div id="Detail">'+
            '<div id="info">'+
        'Mã sản phẩm: <span id="name"></span><br><br>'+
        'Bộ nhớ đệm : <span id="ram"></span><br><br>'+
        'Bộ nhớ trong : <span id="ramIn"></span><br><br>'+
        'Kích thước : <span id="size"></span><br><br>'+
        'Loại Màn hình : <span id="screen"></span><br><br>'+
            '</div>'+
            '<div id="img">'+
            '</div>'+
            '</div>';
        document.getElementById("name").innerHTML = this.product[index].name;
        document.getElementById("ram").innerHTML = this.product[index].ram;
        document.getElementById("ramIn").innerHTML = this.product[index].memory;
        document.getElementById("size").innerHTML = this.product[index].sizescreen;
        document.getElementById("screen").innerHTML = this.product[index].typescreen;
        document.getElementById("img").innerHTML = this.product[index].image;
    };

    this.BuyProducts = function () {
        alert("Cảm ơn bạn đã mua " + app.product.length + " sản phẩm chủa chúng tôi.");
        let text = prompt("Mời bạn nhập địa chỉ giao hàng: ");
        alert("Sản phẩm sẽ được gian đến địa chỉ " + text + " trong vòng 24h tới");
        location.reload();
    }
};

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

let app = new App();
app.disPlay();

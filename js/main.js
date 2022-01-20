function LayXe() {
    var result;
    var uberX = document.getElementById("uberX").checked;
    var uberSUV = document.getElementById("uberSUV").checked;
    var uberBlack = document.getElementById("uberBlack").checked;

    if (uberX) {
        result = 'uberX';
    } else if (uberSUV) {
        result = 'uberSUV';
    } else if (uberBlack) {
        result = 'uberBlack';
    }

    return result;
}
document.getElementById("btnTinhTien").onclick = function() {
    var priceKm = 0;
    var tongGiaThoiGianCho = 0;
    var soKm = document.getElementById("soKM").value;
    var thoiGianCho = document.getElementById("thoiGianCho").value;
    var thanhTien = document.getElementById("xuatTien");
    var xuathien = document.getElementById("divThanhTien");
    var TongTien = 0;
    var LayLoaiXe = LayXe();
    soKm = Number(soKm);
    thoiGianCho = Number(thoiGianCho);


    switch (LayLoaiXe) {
        case 'uberX':
            if (soKm === 1) {
                priceKm = 8000 * soKm;
            } else if (soKm > 1 && soKm < 21) {
                priceKm = 12000 * soKm;
            } else if (soKm >= 21) {
                priceKm = 10000 * soKm;
            }
            tongGiaThoiGianCho = thoiGianCho * 2000;
            TongTien = priceKm + tongGiaThoiGianCho;
            xuathien.style.display = "block";
            thanhTien.innerHTML = TongTien;
            break;

        case 'uberSUV':
            if (soKm === 1) {
                priceKm = 9000 * soKm;
            } else if (soKm > 1 && soKm < 21) {
                priceKm = 14000 * soKm;
            } else if (soKm >= 21) {
                priceKm = 12000 * soKm;
            }
            tongGiaThoiGianCho = thoiGianCho * 3000;
            TongTien = priceKm + tongGiaThoiGianCho;
            xuathien.style.display = "block";
            thanhTien.innerHTML = TongTien;
            break;

        case 'uberBlack':
            if (soKm === 1) {
                priceKm = 10000 * soKm;
            } else if (soKm > 1 && soKm < 21) {
                priceKm = 16000 * soKm;
            } else if (soKm >= 21) {
                priceKm = 14000 * soKm;
            }
            tongGiaThoiGianCho = thoiGianCho * 4000;
            TongTien = priceKm + tongGiaThoiGianCho;
            xuathien.style.display = "block";
            thanhTien.innerHTML = TongTien;
            break;

    }
};
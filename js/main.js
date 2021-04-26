function CalculateBrokerage() {
    const buyQuantity = parseFloat(document.getElementById('BuyQuantity').value);
    const buyPrice = parseFloat(document.getElementById('BuyPrice').value);
    const sellQuantity = document.getElementById('SellQuantity').value ?
        parseFloat(document.getElementById('SellQuantity').value) : 0;
    const sellPrice = document.getElementById('SellPrice').value ?
        parseFloat(document.getElementById('SellPrice').value) : 0;
    const isIntraday = document.getElementById('intraday').checked;
    const isPositional = document.getElementById('positional').checked;
    if (isIntraday) {
        if (buyQuantity && Number.isInteger(buyQuantity) && buyPrice && (sellPrice || sellPrice === 0)) {
            document.getElementsByClassName('depoDiv')[0].style.display = 'none';
            document.getElementById('result').style.display = 'block';
            const totBuyPrice = buyQuantity * buyPrice;
            const totSellPrice = sellQuantity * sellPrice;
            const buyBrokerage = (totBuyPrice > 55555.0) ?
                RoundOffValue(totBuyPrice * 0.00027) :
                (totBuyPrice > 600) ? 15 : RoundOffValue(totBuyPrice * 0.025);
            const sellBrokerage = (totSellPrice > 55555.0) ?
                RoundOffValue(totSellPrice * 0.00027) :
                (totSellPrice > 600) ? 15 : RoundOffValue(totSellPrice * 0.025);
            const totalBrokerage = buyBrokerage + sellBrokerage;
            const payOut = totSellPrice - totBuyPrice;
            const etc = RoundOffValue((totBuyPrice + totSellPrice) * 0.000034);
            const sebi = RoundOffValue((totBuyPrice + totSellPrice) * 0.000001);
            const gst = RoundOffValue((totalBrokerage + etc + sebi) * 0.09);
            const totalGST = gst * 2;
            const sd = RoundOffValue(totBuyPrice * 0.0000325);
            const stt = RoundOffValue(totSellPrice * 0.00025);
            const totalDed = RoundOffValue(totalBrokerage + etc + sebi + totalGST + stt + sd);
            const netAmount = payOut - totalDed;
            document.getElementById('NetAmount').value = netAmount;
            document.getElementById('AmountRequired').value = RoundOffValue(totBuyPrice / 20.0);
            document.getElementById('TotalDeduction').value = totalDed;
            document.getElementById('PayLabel').innerHTML = (netAmount > 0) ? 'Payout Obligation' : 'Pay in Obligation';
            document.getElementById('PayOut').value = payOut;
            document.getElementById('Brokerage').value = totalBrokerage;
            document.getElementById('ETC').value = etc;
            document.getElementById('SEBI').value = sebi;
            document.getElementById('SGST').value = gst;
            document.getElementById('CGST').value = gst;
            document.getElementById('GST').value = totalGST;
            document.getElementById('SD').value = sd;
            document.getElementById('STT').value = stt;
        }
    } else if (isPositional) {
        if (buyQuantity && Number.isInteger(buyQuantity) && buyPrice && (sellPrice || sellPrice === 0)) {
            document.getElementById('result').style.display = 'block'
            document.getElementsByClassName('depoDiv')[0].style.display = 'block';
            const totBuyPrice = buyQuantity * buyPrice;
            const totSellPrice = sellQuantity * sellPrice;
            const buyBrokerage = (totBuyPrice > 9259.0) ?
                RoundOffValue(totBuyPrice * 0.0027) :
                (totBuyPrice > 3333.33) ? 25 : RoundOffValue(totBuyPrice * 0.0075);
            const sellBrokerage = (totSellPrice > 9259.0) ?
                RoundOffValue(totSellPrice * 0.0027) :
                (totSellPrice > 3333.33) ? 25 : RoundOffValue(totSellPrice * 0.0075);
            const totalBrokerage = buyBrokerage + sellBrokerage;
            const payOut = totSellPrice - totBuyPrice;
            const etc = RoundOffValue((totBuyPrice + totSellPrice) * 0.000034);
            const sebi = RoundOffValue((totBuyPrice + totSellPrice) * 0.0000005);
            const gst = RoundOffValue((totalBrokerage + etc + sebi) * 0.09);
            const totalGST = gst * 2;
            const sd = 0;
            const stt = RoundOffValue((totSellPrice + totBuyPrice) * 0.001);
            const depoCharges = 25;
            const totalDed = RoundOffValue(totalBrokerage + etc + sebi + totalGST + stt + sd + depoCharges);
            const netAmount = payOut - totalDed;
            document.getElementById('NetAmount').value = netAmount;
            document.getElementById('AmountRequired').value = totBuyPrice;
            document.getElementById('TotalDeduction').value = totalDed;
            document.getElementById('PayLabel').innerHTML = (netAmount > 0) ? 'Payout Obligation' : 'Pay in Obligation';
            document.getElementById('PayOut').value = payOut;
            document.getElementById('Brokerage').value = totalBrokerage;
            document.getElementById('ETC').value = etc;
            document.getElementById('SEBI').value = sebi;
            document.getElementById('SGST').value = gst;
            document.getElementById('CGST').value = gst;
            document.getElementById('GST').value = totalGST;
            document.getElementById('SD').value = sd;
            document.getElementById('STT').value = stt;
            document.getElementById('DepositoryCharges').value = depoCharges;
        }
    } else {
        if (buyQuantity && Number.isInteger(buyQuantity) && buyPrice && (sellPrice || sellPrice === 0)) {
            document.getElementById('result').style.display = 'block'
            document.getElementsByClassName('depoDiv')[0].style.display = 'none';
            const totBuyPrice = buyQuantity * buyPrice;
            const totSellPrice = sellQuantity * sellPrice;
            const lotSize = parseInt(document.getElementById('LotSize').value);
            const buyBrokerage = lotSize * 40;
            const sellBrokerage = lotSize * 40;
            const totalBrokerage = buyBrokerage + sellBrokerage;
            const payOut = totSellPrice - totBuyPrice;
            const etc = RoundOffValue((totBuyPrice + totSellPrice) * 0.0005);
            const sebi = RoundOffValue((totBuyPrice + totSellPrice) * 0.0000005);
            const gst = RoundOffValue((totalBrokerage + etc + sebi) * 0.09);
            const totalGST = gst * 2;
            const sd = RoundOffValue(totBuyPrice * 0.0000325);
            const stt = RoundOffValue(totSellPrice * 0.0005);
            const depoCharges = 25;
            const totalDed = RoundOffValue(totalBrokerage + etc + sebi + totalGST + stt + sd + depoCharges);
            const netAmount = payOut - totalDed;
            document.getElementById('NetAmount').value = netAmount;
            document.getElementById('AmountRequired').value = totBuyPrice;
            document.getElementById('TotalDeduction').value = totalDed;
            document.getElementById('PayLabel').innerHTML = (netAmount > 0) ? 'Payout Obligation' : 'Pay in Obligation';
            document.getElementById('PayOut').value = payOut;
            document.getElementById('Brokerage').value = totalBrokerage;
            document.getElementById('ETC').value = etc;
            document.getElementById('SEBI').value = sebi;
            document.getElementById('SGST').value = gst;
            document.getElementById('CGST').value = gst;
            document.getElementById('GST').value = totalGST;
            document.getElementById('SD').value = sd;
            document.getElementById('STT').value = stt;
            document.getElementById('DepositoryCharges').value = depoCharges;
        }
    }
}

function RoundOffValue(val) {
    return Math.round((val + Number.EPSILON) * 10000) / 10000
}

$(window).on('load', function () {
    document.getElementById('lotSizeDiv').style.display = 'none';
    $('#BuyQuantity').keyup(function () {
        $('#SellQuantity').val(this.value);
    });
    $('#intraday').change(function () {
        if (document.getElementById('intraday').checked) {
            document.getElementById('positional').checked = false;
            document.getElementById('options').checked = false;
            document.getElementById('lotSizeDiv').style.display = 'none';
            document.getElementById('BuyPrice').value = null;
            document.getElementById('SellPrice').value = null;
            document.getElementById('BuyQuantity').value = null;
            document.getElementById('SellQuantity').value = null;
        }
    });
    $('#positional').change(function () {
        if (document.getElementById('positional').checked) {
            document.getElementById('intraday').checked = false;
            document.getElementById('options').checked = false;
            document.getElementById('lotSizeDiv').style.display = 'none';
            document.getElementById('BuyPrice').value = null;
            document.getElementById('SellPrice').value = null;
            document.getElementById('BuyQuantity').value = null;
            document.getElementById('SellQuantity').value = null;
        }
    });
    $('#options').change(function () {
        if (document.getElementById('options').checked) {
            document.getElementById('intraday').checked = false;
            document.getElementById('positional').checked = false;
            document.getElementById('lotSizeDiv').style.display = 'block';
            document.getElementById('LotSize').value = 1;
            document.getElementById('BuyPrice').value = 400;
            document.getElementById('BuyQuantity').value = 25;
            document.getElementById('SellQuantity').value = 25;
        } else {
            document.getElementById('LotSize').style.display = 'none';
        }
    });
});
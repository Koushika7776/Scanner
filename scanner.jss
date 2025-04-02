document.addEventListener("DOMContentLoaded", function () {
    function onScanSuccess(decodedText) {
        document.getElementById("result").innerText = "Scanned Code: " + decodedText;
    }

    function onScanError(errorMessage) {
        console.warn(Scan error: ${errorMessage});
    }

    let scanner = new Html5Qrcode("reader");
    scanner.start(
        { facingMode: "environment" }, // Use the rear camera
        { fps: 10, qrbox: 250 },
        onScanSuccess,
        onScanError
    ).catch(err => console.log("Camera error: ", err));
});

/*
 * @Description: use to copy web screen and save as pdf
 * @Modified: 17-09-03
 * @Stutus: can't use
 */


<template>
    <a v-on:click="screenshot()" v-show="!isCloning">
        <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
    </a>
</template>
<script>
import html2canvas from './../lib/html2canvas/html2canvas'
import jsPDF from 'jspdf'


const backingScale = function () {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
    }
    return 1;
};
const parsePixelValue = function (value) {
    return parseInt(value, 10);
};

export default {
    props: ['shottype'],
    data: function () {
        return {
            isCloning: false
        }
    },
    methods: {
        screenshot: function screenshot() {
            const _this = this;
            _this.isCloning = true;
            const canvas = document.createElement('canvas'),
                scaleFactor = backingScale(),
                canvasStyle = document.body.getBoundingClientRect();
            canvas.width = parsePixelValue(canvasStyle.width) * scaleFactor;
            canvas.height = parsePixelValue(canvasStyle.height) * scaleFactor;
            canvas.style.width = canvasStyle + 'px';
            canvas.style.height = canvasStyle + 'px';
            const context = canvas.getContext("2d").scale(2, 2);

            html2canvas(document.getElementById('app'), {
                canvas: context,
                onrendered: (canvas) => {
                    _this.shottype === 'pdf' ? _this.shotToPdf(canvas) : false;
                    _this.isCloning = false;
                },
                timeout: 1000
            });
        },
        shotToPdf: function shotToPdf(canvas) {
            const jspdf = new jsPDF();
            document.body.appendChild(canvas);
            // jspdf.addImage(canvas.toDataURL('image/png'), 'JPEG', 0, 0, canvas.width, canvas.height);
            // jspdf.save('黃俊諺CV.pdf');
        },
    }
}





</script>
<style>

</style>


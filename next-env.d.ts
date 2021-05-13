/// <reference types="next" />
/// <reference types="next/types/global" />

const withImages = require('next-images')
module.exports = withImages()

declare module '*.svg' {
    const content: any;
    export default content;
}


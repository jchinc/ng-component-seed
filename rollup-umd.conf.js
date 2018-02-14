export default {
    name:'ngMessage',
    input: './tmp/esm5/ng-message.js',
    output: {
        file: './dist/bundles/ng-message.umd.js',
        format: 'umd',
        globals:{
            '@angular/core':'ng.core'
        }
    },
    external: [
        '@angular/core'
    ]
}
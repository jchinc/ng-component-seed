export default {
    input: './tmp/esm5/ng-hello-world.js',
    output: {
        file: './dist/bundles/ng-hello-world.umd.js',
        name: 'ngHelloWorld',
        format: 'umd',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common'
        }
    },
    external: [
        '@angular/core',
        '@angular/common'
    ]
}
const vinylFs = require('vinyl-fs');
const gulpInlineNg2Template = require('gulp-inline-ng2-template');

const src = './src';
const dest = './tmp/src';

vinylFs
    .src([
        // Origen
        `${src}/**/*.ts`
    ])
    .pipe(
        // Plugin para convertir html y css en línea
        gulpInlineNg2Template({
            base: `${src}`,
            useRelativePaths: true
        })
    )
    .pipe(
        // Destino
        vinylFs.dest(`${dest}`)
    );
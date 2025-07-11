const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];

if (!inputFile) {
    console.error('YAML must be given.\nExemple : node split-yml.js questions.yml');
    process.exit(1);
}

try {
    const fileContent = fs.readFileSync(inputFile, 'utf8');

    const rawBlocks = fileContent
        .split(/^-\s+question:/gm)
        .filter(Boolean)

    const baseName = path.basename(inputFile, path.extname(inputFile));
    const outputDir = path.join(process.cwd(), baseName);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    rawBlocks.forEach((blockContent, index) => {
        const fullBlock = `- question:${blockContent}`;
        const outputPath = path.join(outputDir, `question_${index + 1}.yml`);
        fs.writeFileSync(outputPath, fullBlock.trimStart(), 'utf8');
        console.log(`File created : question_${index + 1}.yml`);
    });

    console.log(`\nSuccess ! ${rawBlocks.length} files(s) exported(s) in ${outputDir}`);
} catch (err) {
    console.error('Error during file treatment :', err.message);
    process.exit(1);
}

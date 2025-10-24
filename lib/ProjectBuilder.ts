// lib/ProjectBuilder.ts

type FileMap = { [filename: string]: string };

export function parseAIResponseToFiles(aiText: string): FileMap {
  const files: FileMap = {};
  const blocks = aiText.split('```');

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const lines = block.trim().split('\n');
    const firstLine = lines[0];

    if (firstLine.includes('.') && lines.length > 1) {
      const filename = firstLine.trim();
      const content = lines.slice(1).join('\n');
      files[filename] = content;
    }
  }

  return files;
}

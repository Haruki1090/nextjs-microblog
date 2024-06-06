import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// mdファイルのファイルのデータを取得
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPstsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, ''); // ファイル名から.mdを削除 -> id

        // mdファイルを文字列として読み込む
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        // idとdataを返す
        return {
            id,
            ...matterResult.data
        };
    });
    return allPstsData;
}

// getStaticPathsで使用
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
}

// idに基づいて、mdファイルのデータを取得し返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const blogContent = await remark().use(html).process(matterResult.content);

    const blogContenHtml = blogContent.toString();

    return {
        id,
        blogContenHtml,
        ...matterResult.data
    };
}
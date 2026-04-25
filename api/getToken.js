// 文件路径: api/getToken.js
export default function handler(req, res) {
    // 从 Vercel 的环境变量中读取 Token，绝不写死在代码里
    const token = process.env.COZE_TOKEN;
    
    // 返回给前端
    res.status(200).json({ token: token });
}

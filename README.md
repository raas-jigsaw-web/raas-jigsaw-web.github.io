# Jigsaw

## Develop & Deploy

本地开发（示例）：`pnpm install && pnpm run dev`（与仓库根 `README` 一致）。

## 生产静态资源（Docker / nginx 镜像）

本目录的 `Dockerfile` 只打包已构建的 `dist/`。打镜像前在此目录执行：

```bash
cnpm i && cnpm run build
```

（`cnpm` 当前版本无顶层 `cnpm build` 子命令，生产构建请用 **`cnpm run build`**，等价于通过 cnpm 执行 `package.json` 的 `build` 脚本。）

构建完成后，在**仓库根目录**执行 **`./scripts/sync-web-dist-to-root.sh`**，将本目录的 `dist/` 复制到 **`../dist/`**（与 Docker 镜像中的静态资源一致，并用于 **GitHub Pages**）。打 Web 镜像或推送 Docker Hub 前也应执行该脚本。

## 原仓库说明（历史）

原模板文档曾写 `yarn && yarn start && yarn deploy`；本 POC 的 Web **依赖安装与生产构建**统一为 **cnpm**（`cnpm i`、`cnpm run build`，见上）。

## The API

### Get Answer(s)

Http Method: GET

Request /resolve

| query | type   | mandatory | comment          | default |
|-------|--------|-----------|------------------|---------|
| month | number | N         | 0-11, 0 is Jan   | 0       |
| day   | number | N         | 0-30, 0 is 1st   | 0       |
| week  | number | N         | 0-6, 0 is Sunday | 0       |
| count | number | N         | answer(s) count  | 0       |

Response application/json

common filed

| field   | type   | comment |
|---------|--------|---------|
| code    | number | 0 is ok |
| message | string | -       |
| data    | object | -       |

data of GET /resolve

| field  | type         | comment |
|--------|--------------|---------|
| month  | number       | -       |
| day    | number       | -       |
| week   | number       | -       |
| count  | number       | -       |
| result | list[object] | -       |

data.result[*] of GET /resolve

| field  | type           | comment               |
|--------|----------------|-----------------------|
| matrix | string\[8]\[7] | represents the result |

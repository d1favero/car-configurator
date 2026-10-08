import JSZip from "jszip"

const fileName = (path) => path.split("/").pop()
const baseName = (path) => fileName(path).replace(/\.[^/.]+$/, "")

async function fetchBlob(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
    }
    return await response.blob()
}

function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 100)
}

export async function downloadModelZip({modelPath, texturePaths}){
    const [modelBlob, ...textureBlobs] = await Promise.all(
        [modelPath, ...texturePaths].map(fetchBlob)
    )

    const zip = new JSZip()
    zip.file(fileName(modelPath), modelBlob)

    const textures = zip.folder("textures")
    texturePaths.forEach((path, index) => {
        textures.file(fileName(path), textureBlobs[index])
    })
    
    const zipBlob = await zip.generateAsync({ type: "blob" })
    triggerDownload(zipBlob, `${baseName(modelPath)}.zip`)
}
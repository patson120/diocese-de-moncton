"use client"

import Text from "@/components/Text"
import { Download } from "lucide-react"
import { Button } from "./button"

const DownloadButton = ({ url }: { url: string }) => {
    const downloadFile = async () => {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Unable to download file")
        }

        const blob = await response.blob()
        const objectUrl = URL.createObjectURL(blob)
        const anchor = document.createElement("a")
        const fileName = decodeURIComponent(url.split("/").pop()?.split("?")[0] || "document")

        anchor.href = objectUrl
        anchor.download = fileName
        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()
        URL.revokeObjectURL(objectUrl)
    }

    return (
        <Button type="button" variant="outline" className="font-bold w-min" onClick={downloadFile}>
            <Download className="h-4 w-4 text-gray-600 mr-2" />
            <Text className="text-inherit !text-gray-600 !font-medium" keyString="download_msg" />
        </Button>
    )
}

export default DownloadButton

async function rest_texture(url) {
    return new Promise((resolve,reject) => {
        let job = AsyncTaskDownloadImage.DownloadImage(url)
        job.OnSuccess = [resolve]
        job.OnFail = [reject]
    })
}

module.exports = rest_texture
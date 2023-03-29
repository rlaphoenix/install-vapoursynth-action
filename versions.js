import "cross-fetch/polyfill";

export async function get_version_data(version) {
    const pypi_res = await fetch("https://pypi.org/pypi/vapoursynth/json");
    const pypi_data = await pypi_res.json();

    const versions = Object.keys(pypi_data["releases"]).sort((a, b) => b - a);
    const newest_version = versions[0];
    const oldest_version = Math.min(versions);

    const vs_version = parseFloat(version ?? newest_version);
    const pypi_version = versions.find(v => parseFloat(v) <= vs_version);  // supports e.g., r47.2 if 47 is requested
    if (vs_version > newest_version || vs_version < oldest_version || pypi_version === undefined) {
        throw `The version "${vs_version}" cannot be installed as it's not available on PyPI.`;
    }

    // TODO: Find a way to automate the zimg version
    // Compilation will fail if the zimg version is not correct
    let zimg_branch;
    if (vs_version >= 55) {
        zimg_branch = "v3.0";
    } else if (vs_version >= 46) {
        zimg_branch = "v2.9";
    } else if (vs_version >= 45) {
        zimg_branch = "v2.8";
    } else {
        zimg_branch = "v2.7";
    }

    const version_data = {
        // TODO: Have ./windows and ./linux accept as float/int not string
        pypi_version: pypi_version.toString(),
        minor: vs_version.toString(),
        vs_branch: `R${vs_version}`,
        zimg_branch: zimg_branch
    }

    return version_data;
}

# install-vapoursynth-action

This action compiles and installed the VapourSynth C++ library.

Note: Only the core VapourSynth library (with zimg) will be compiled. That means the
following plugins and tools will be unavailable:

- `core.ocr` (Tesseract)
- `core.imwri` (ImageMagick)
- `core.sub` (LibASS and FFmpeg)
- `vsrepo` (and associated tools)
- `vspipe`

## Usage

```yaml
- name: Install VapourSynth
  uses: rlaphoenix/install-vapoursynth-action@v1.0.0
  with:
    version: 61
    cache: true
```

### Inputs

#### `version` (int)

The version to install. It will install the latest version if not specified.

#### `cache` (bool)

Enable or disabling caching of the compilation. This will heavily speed up workflows
after the first run and is recommended. It defaults to true and does not need to be
manually specified.

### Outputs

#### `version` (int)

The version that was installed.

## Supported Versions

The action automatically downloads the latest VapourSynth version information via PyPI's API.
This means it supports any version that has a PyPI release. Therefore, any version that does
not have a PyPI release will not be recognized as a valid VapourSynth version.

Do note that due to this, some versions are unable to be installed as they don't have any PyPI
releases. E.g., R55. Also the zimg version has yet to be automated and will need updating over
time.

## Credit

This project is more or less a fork of <https://github.com/Irrational-Encoding-Wizardry/install-vapoursynth-action>.
I've decided to make a new repository as a lot of the code and direction of the action was changed. The original
project seems abandoned and is currently broken beyond support for VapourSynth R50.

## License

[GNU General Public License, Version 3.0](LICENSE)

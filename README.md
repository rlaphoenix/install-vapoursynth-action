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
  uses: rlaphoenix/install-vapoursynth-action@v2.0.2
  with:
    version: 61
    cache: true
```

### Inputs

#### `version` (int)

*Required* The version to install. It must be manually specified.

#### `cache` (bool)

Enable or disabling caching of the compilation. This will heavily speed up workflows
after the first run and is recommended. It defaults to true and does not need to be
manually specified.

### Outputs

#### `zimg-branch` (int)

The branch zimg was compiled with, e.g., `3.0`.

## Supported Versions

The action supports any version tagged as `R...` on the VapourSynth GitHub. E.g., `55`
for R55, `61-RC1` for R61-RC1 and so on. The version number does not resolve to the
latest minor-version. E.g., `version: 47` will not install R47.2, it will install R47.
The version number is never pre-checked to be valid. It will instead fail during the
git clone.

Since this action does not pre-validate versions against a hardcoded list of versions,
it won't need updating. However, VapourSynth updates to newer zimg versions every now
and then and this action has no way to know which version is required. Therefore, the
project still requires updating whenever the zimg version is updated.

## Supported Runners

Only Linux runners are currently supported. The following runners have been tested:

- `ubuntu-22.04`

## Credit

This project is more or less a fork of <https://github.com/Irrational-Encoding-Wizardry/install-vapoursynth-action>.
I've decided to make a new repository as a lot of the code and direction of the action was changed. The original
project seems abandoned and is currently broken beyond support for VapourSynth R50.

## License

[GNU General Public License, Version 3.0](LICENSE)

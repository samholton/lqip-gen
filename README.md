# lqip-gen

Small CLI wrapper around [lqip-modern](https://github.com/transitive-bullshit/lqip-modern) to quickly generate base64 representation of an image.


## Install

```
npm install -g lqip-gen
```


## Usage

```bash
lqip-gen <source file>

Produce LQIP base64 data and output

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -c, --copy     Copy the output base64 data to clipboard              [boolean]
```


## Copy Option Notes
The copy option makes use of [node-copy-paste](https://github.com/xavi-/node-copy-paste). This may require additional installations to work depending on your operating system. For example, on Linux you may need 

```bash
apt install xclip
```

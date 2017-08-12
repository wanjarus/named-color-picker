<h1 align="center" style="text-align:center;">Named Color Picker</h1>
<p align="center" style="text-align:center;">jQuery color picker w/ 2,065 named colors, mobile-friendly.</p>

<p align="center" style="text-align:center;">
  <a href="https://www.npmjs.com/package/named-color-picker"><img src="https://nodei.co/npm/named-color-picker.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="npm overview" height="69" valign="middle" style="height:69px; vertical-align:middle;" /></a><br />
  <a href="https://github.com/src-works/named-color-picker/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/version-0.0.4-orange.svg" alt="latest version" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://github.com/src-works/named-color-picker/blob/master/LICENSE.txt"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://github.com/src-works/named-color-picker/blob/master/dist/scripts/js/index.web.min.js"><img src="https://img.shields.io/github/size/src-works/named-color-picker/dist/scripts/js/index.web.min.js.svg" alt="browser script size" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://github.com/src-works/named-color-picker/blob/master/dist/scripts/ts/types/index.d.ts"><img src="https://img.shields.io/badge/%f0%9f%93%98-typescript%2fjs-2882C3.svg" alt="typescript/js" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://github.com/src-works/named-color-picker/issues"><img src="https://img.shields.io/github/issues/src-works/named-color-picker.svg" alt="open issues" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a><br />
  <a href="https://greenkeeper.io/"><img src="https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg" alt="greenkeeper" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://david-dm.org/src-works/named-color-picker"><img src="https://img.shields.io/david/src-works/named-color-picker.svg" alt="dependency status" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://twitter.com/_src_works"><img src="https://img.shields.io/twitter/follow/_src_works.svg?style=social&amp;label=Follow%20%40_src_works" alt="follow on twitter" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://github.com/src-works/named-color-picker"><img src="https://img.shields.io/github/followers/src-works.svg?style=social&amp;label=Follow" alt="follow on github" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> <a href="https://github.com/src-works/named-color-picker/fork"><img src="https://img.shields.io/github/forks/src-works/named-color-picker.svg?style=social&amp;label=Fork" alt="fork" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a>
</p>

<p align="center" style="text-align:center;">
  <a href="https://src.works/donate?utm_source=repo&amp;utm_medium=organic&amp;utm_term=src-works%2Fnamed-color-picker&amp;utm_campaign=donate%3Aeither-side&amp;utm_content=sub-header"><img src="https://src.works/wp-content/uploads/2017/07/dby-donate.svg?v=0.0.1" alt="developed by ‹src.works/›" width="100%" height="auto" style="width:100%; height:auto;" /></a>
</p>

The named color picker takes a somewhat different approach to choosing a color. Instead of a color spectrum/wheel, colors are selected from a fullscreen grid by name, or searched for in a dropdown, also by name. (**[DEMO](https://src-works.github.io/named-color-picker/docs/)**)

There are 2,065 named color variables (no duplicate names, no duplicate colors). Color names courtesy of [Resene Paints](http://www.resene.co.nz/) and the [XKCD Color Survey](https://blog.xkcd.com/2010/05/03/color-survey-results/) (minus potentially-offensive color names & negative connotations). Additional color names include those supported by all major browsers in the CSS3 spec.

## Installation Options

### Install via <img src="https://src.works/wp-content/uploads/2017/05/npm.svg?v=0.0.1" alt="NPM" valign="middle" width="auto" height="20" style="vertical-align:middle; width:auto; height:20px;" /> [package](https://www.npmjs.com/package/named-color-picker)

```bash
$ npm install named-color-picker --save;
```

### Or install via <img src="https://src.works/wp-content/uploads/2017/06/yarn.svg?v=0.0.1" alt="Yarn" valign="middle" width="auto" height="24" style="vertical-align:middle; width:auto; height:24px;" /> Yarn [package](https://yarnpkg.com/en/package/named-color-picker)

```bash
$ yarn add named-color-picker;
```

### Or install via [unpkg.com](https://unpkg.com/named-color-picker/dist/) CDN <img src="https://src.works/wp-content/uploads/2017/05/cdn.svg?v=0.0.1" alt="CDN" valign="middle" width="auto" height="20" style="vertical-align:middle; width:auto; height:20px;" />

```html
<!-- Style dependencies. -->
<link href="https://unpkg.com/selectize@0.12.4/dist/css/selectize.default.css" rel="stylesheet" integrity="sha384-y/lK0mgNA2CldgvjfZFQ7ciSAhXLpIgkl4W/wifJ0EobNX5ac1buhp9X11g7GR2M" crossorigin="anonymous" />

<!-- Script dependencies. -->
<script src="https://unpkg.com/jquery@3.2.1/dist/jquery.min.js" integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f" crossorigin="anonymous"></script>
<script src="https://unpkg.com/tinycolor2@1.4.1/dist/tinycolor-min.js" integrity="sha384-a5Bm1aj9jmRF0rquE7qZJ52rHZMfCJnKtC08F0GSTdT/qDFFuko4EzYOyluc7CKg" crossorigin="anonymous"></script>
<script src="https://unpkg.com/selectize@0.12.4/dist/js/standalone/selectize.min.js" integrity="sha384-hYEUbTDrbRpAapjELb51WHIvIGbN0P5Dp+ub0zJz6BAqrblWPrjftbF4068yYJAi" crossorigin="anonymous"></script>

<!-- The package itself. -->
<script src="https://unpkg.com/named-color-picker@0.0.4" integrity="sha384-unpWJoYFP4QLAXO5nJnknHFG5u+tmgn9YT1D9rbOpEO+R+7E1LmhbvuA9rwcqIjX" crossorigin="anonymous"></script>
```

#### Mean Alternative (Heavier Stand-Alone Library)

In this variation, the package itself is larger because it also contains the dependencies. That does make it easier to use, but you lose the ability to separate the dependencies from the package itself. For example, if you need one of this package's dependencies in another part of your application (for something unrelated to this package), it's better to include that dependency yourself so it can be shared by all.

```html
<script src="https://unpkg.com/named-color-picker@0.0.4/dist/scripts/js/index.web.min.mean.js" integrity="" crossorigin="anonymous"></script>
```

## Works in All [Modern Browsers](http://browserl.ist/?q=%3E%201%25#src-works/named-color-picker)

<p align="center" style="text-align:center;">
  <a href="http://browserl.ist/?q=%3E%201%25#src-works/named-color-picker"><img src="https://src.works/wp-content/uploads/2017/05/browser-icons.svg?v=0.0.1" alt="Browsers" width="100%" height="auto" style="width:100%; height:auto;" /></a>
</p>

If you need to support IE <= 11 (prior to Edge), older versions of Android, and [much older versions](https://polyfill.io/v2/docs/features/) of other browsers, you can insert this polyfill before all other script tags. The [polyfill.io](https://polyfill.io/v2/docs/) service fills ES6 features that a user's browser is lacking, based on both UA & feature detection.

```html
<!-- Before ALL other script tags in your document. -->
<!-- Only needed if you want to support much older browsers. -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&amp;flags=gated"></script>
```

## Demos / Documentation

- see: <https://src-works.github.io/named-color-picker/docs/>

<p align="center" style="text-align:center;">
  <a href="https://src.works/subscribe?utm_source=repo&amp;utm_medium=organic&amp;utm_term=src-works%2Fnamed-color-picker&amp;utm_campaign=donate%3Aeither-side&amp;utm_content=built-with:image"><img src="https://src.works/wp-content/uploads/2017/08/built-with.svg?v=0.0.1" alt="Built with TypeScript/JavaScript, Babel, NodeJS, NPM, and Sass" width="100%" height="auto" style="width:100%; height:auto;" /></a>
</p>

## Commercial Use

<img src="https://www.gravatar.com/avatar/c8e0057f78fa5b54326cd437494b87e9?s=256&v=0.0.1" alt="@jaswrks" align="right" width="12%" height="auto" hspace="30" style="float:right; width:12%; height:auto; margin-left:30px;" />

This software is created, documented and maintained by [Jason Caldwell](https://twitter.com/jaswrks) ([`@jaswrks`](https://twitter.com/jaswrks)) and a small team of talented developers at [‹src.works/›](https://src.works). It's open source, but if you use it commercially, please [**pay what you can**](https://src.works/donate?utm_source=repo&utm_medium=organic&utm_term=src-works%2Fnamed-color-picker&utm_campaign=donate%3Aeither-side&utm_content=commercial-use).

## Development Channels

Always use the latest stable version in production. If you want upcoming changes ahead of time use the `@dev` or `@rc` tag, but please do so at your own risk. The `@dev` and `@rc` tags are potentially unstable at various times throughout a development cycle, and therefore should not be used in production.

<table width="100%" align="center" style="width:100%; margin-left:auto; margin-right:auto;">
  <thead>
    <tr>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Channel</th>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">NPM Tag</th>
      <th align="center" valign="middle" width="100%" style="text-align:center; vertical-align:middle; width:100%;">Description</th>
      <th align="center" valign="middle" width="150" nowrap style="text-align:center; vertical-align:middle; width:150px;"><a href="http://semver.org/">SemVer</a></th>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Hackers</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@dev/">@dev</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><strong>Latest Bleeding Edge</strong><br />potentially-unstable</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@dev/"><img src="https://img.shields.io/npm/v/named-color-picker/dev.svg" alt="Release Tag" valign="middle" style="vertical-align:middle;" /></a></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://github.com/src-works/named-color-picker/tree/master">master</a> (<a href="https://github.com/src-works/named-color-picker/pulls">PRs</a>)</td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Lab Rats</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@rc/">@rc</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><strong>Next Release Candidate</strong><br />upcoming semi-stable release</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@rc/"><img src="https://img.shields.io/npm/v/named-color-picker/rc.svg" alt="Release Tag" valign="middle" style="vertical-align:middle;" /></a></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://github.com/src-works/named-color-picker/releases">releases</a></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Everyone</strong></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@latest/">@latest</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><strong>Latest Stable Version</strong><br />highly recommended</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@latest/"><img src="https://img.shields.io/npm/v/named-color-picker/latest.svg" alt="Release Tag" valign="middle" style="vertical-align:middle;" /></a></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://github.com/src-works/named-color-picker/releases">releases</a></td>
    </tr>
  </tbody>
</table>

## NPM Consumption Examples

<table width="100%" align="center" style="width:100%; margin-left:auto; margin-right:auto;">
  <thead>
    <tr>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Channel</th>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">NPM Tag</th>
      <th align="center" valign="middle" width="100%" style="text-align:center; vertical-align:middle; width:100%;">NPM package.json</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Hackers</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@dev/">@dev</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>&quot;named-color-picker&quot;: &quot;dev&quot;</code></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Lab Rats</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@rc/">@rc</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>&quot;named-color-picker&quot;: &quot;rc&quot;</code></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Everyone</strong></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@latest/">@latest</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>&quot;named-color-picker&quot;: &quot;latest&quot;</code></td>
    </tr>
    <tr>
      <td align="center" valign="middle" colspan="2" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Latest Stable Version</strong></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>&quot;named-color-picker&quot;: &quot;^0.0.4&quot;</code></td>
    </tr>
  </tbody>
</table>

<table width="100%" align="center" style="width:100%; margin-left:auto; margin-right:auto;">
  <thead>
    <tr>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Channel</th>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">NPM Tag</th>
      <th align="center" valign="middle" width="100%" style="text-align:center; vertical-align:middle; width:100%;">NPM Install</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Hackers</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@dev/">@dev</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>npm install named-color-picker@dev</code></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Lab Rats</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@rc/">@rc</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>npm install named-color-picker@rc</code></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Everyone</strong></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@latest/">@latest</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>npm install named-color-picker@latest</code></td>
    </tr>
    <tr>
      <td align="center" valign="middle" colspan="2" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Latest Stable Version</strong></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><code>npm install named-color-picker</code></td>
    </tr>
  </tbody>
</table>

## CDN Directory Indexes

<table width="100%" align="center" style="width:100%; margin-left:auto; margin-right:auto;">
  <thead>
    <tr>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Channel</th>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">NPM Tag</th>
      <th align="center" valign="middle" width="100%" style="text-align:center; vertical-align:middle; width:100%;">CDN Distribution Index</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Hackers</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@dev/dist/">@dev</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@dev/dist/">https://unpkg.com/named-color-picker@dev/dist/</a></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Lab Rats</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@rc/dist/">@rc</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@rc/dist/">https://unpkg.com/named-color-picker@rc/dist/</a></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Everyone</strong></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@latest/dist/">@latest</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@latest/dist/">https://unpkg.com/named-color-picker@latest/dist/</a></td>
    </tr>
    <tr>
      <td align="center" valign="middle" colspan="2" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Latest Stable Version</strong></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@0.0.4/dist/">https://unpkg.com/named-color-picker@0.0.4/dist/</a></td>
    </tr>
  </tbody>
</table>

## CDN Script URLs

<table width="100%" align="center" style="width:100%; margin-left:auto; margin-right:auto;">
  <thead>
    <tr>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Channel</th>
      <th align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">NPM Tag</th>
      <th align="center" valign="middle" width="100%" style="text-align:center; vertical-align:middle; width:100%;">CDN Script URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Hackers</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@dev/dist/">@dev</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@dev">https://unpkg.com/named-color-picker@dev</a></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;">Lab Rats</td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@rc/dist/">@rc</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@rc">https://unpkg.com/named-color-picker@rc</a></td>
    </tr>
    <tr>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Everyone</strong></td>
      <td align="center" valign="middle" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><a href="https://unpkg.com/named-color-picker@latest/dist/">@latest</a></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@latest">https://unpkg.com/named-color-picker@latest</a></td>
    </tr>
    <tr>
      <td align="center" valign="middle" colspan="2" nowrap style="text-align:center; vertical-align:middle; white-space:nowrap;"><strong>Latest Stable Version</strong></td>
      <td align="center" valign="middle" style="text-align:center; vertical-align:middle;"><a href="https://unpkg.com/named-color-picker@0.0.4">https://unpkg.com/named-color-picker@0.0.4</a></td>
    </tr>
  </tbody>
</table>

#### <img src="https://src.works/wp-content/uploads/2017/05/cdn.svg?v=0.0.1" alt="CDN" valign="middle" width="auto" height="20" style="vertical-align:middle; width:auto; height:20px;" /> In production, use the latest stable version with an SRI integrity hash.

```html
<script src="https://unpkg.com/named-color-picker@0.0.4" integrity="sha384-unpWJoYFP4QLAXO5nJnknHFG5u+tmgn9YT1D9rbOpEO+R+7E1LmhbvuA9rwcqIjX" crossorigin="anonymous"></script>
```

_**Tip:** Don't use an SRI hash with a tag like `@dev`, `@rc`, or `@latest`. Tags reference a version dynamically; e.g., the `@latest` tag will point to an updated copy once the next version is released — rendering the SRI invalid. Instead, use a specific `@x.x.x` version in the URL._

## MIT License

For full details see: [LICENSE.txt](https://github.com/src-works/named-color-picker/blob/master/LICENSE.txt)

## Changelog

For full details see: [CHANGELOG.md](https://github.com/src-works/named-color-picker/blob/master/CHANGELOG.md)

## Semantic Versioning

New versions are released following [semver.org](http://semver.org/) guidelines.

## Pull Requests Welcome

<a href="https://github.com/src-works/named-color-picker/fork"><img src="https://img.shields.io/github/forks/src-works/named-color-picker.svg?style=social&amp;label=Fork" alt="fork" height="20" valign="middle" style="height:20px; vertical-align:middle;" /></a> the `master` branch at GitHub and submit your changes for review.

<p align="center" style="text-align:center;">
  <a href="https://src.works/subscribe?utm_source=repo&amp;utm_medium=organic&amp;utm_term=src-works%2Fnamed-color-picker&amp;utm_campaign=donate%3Aeither-side&amp;utm_content=lab-rats:subscribe"><img src="https://src.works/wp-content/uploads/2017/05/lab-rats-subscribe.svg?v=0.0.1" alt="Lab Rats Subscribe" width="100%" height="auto" style="width:100%; height:auto;" /></a>
</p>
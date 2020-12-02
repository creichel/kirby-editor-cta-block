# CTA Block for the Kirby 3 Editor

The plugin provides a call-to-action button to the Kirby Editor.

## References

- [Kirby 3](https://getkirby.com/)
- [Editor](https://github.com/getkirby/editor)

## Installation

Installation is currently only possible as file download or git submodule.
If anyone wants to help with setting up a composer package, I'm more than happy to accept a pull request.

**Note:** You can also use a different name for plugin directory, but [it needs to come after `editor` alphabetically](https://github.com/getkirby/editor/issues/238).

### Git Submodule

```
git submodule add https://github.com/creichel/kirby-editor-cta-block.git site/plugins/kirby-editor-cta-block
```

### Download

1. Download the [source archive](https://github.com/creichel/kirby-editor-cta-block/archive/master.zip)
2. Unpack to `site/plugins/kriby-editor-cta-block`

## Usage

### Template

In your templates you can use the normal Editor integration:

```php
<?= $page->text()->blocks() ?>
```

### Customization

As with any Editor blocks, you can provide a custom [snippet](https://getkirby.com/docs/guide/templates/snippets), so you can define how the file is rendered.

```php
<a class="cta" data-action="button" data-title="<?= $content ?>" href="<?= $attrs->url() ?>" <?= $attrs->newwindow()->value() ? 'target="_blank"' : '' ?>>
    <?= $content ?>
</a>
```

## License

This plugin is licensed under [MIT](LICENSE.md)

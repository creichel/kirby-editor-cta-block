editor.block("cta", {
    // will appear as title in the blocks dropdown
    label: "Call-To-Action Button",
  
    // icon for the blocks dropdown
    icon: "open",
  
    // get the block content
    props: {
      content: String,
      attrs: {
        type: Object,
        default () {
            return {};
        }
      },
      endpoints: Object,
      spellcheck: Boolean
    },

    computed: {
      fields() {
        return {
            url: {
                label: this.$t('editor.blocks.cta.url.label'),
                type: "url",
                icon: "url"
            },
            newwindow: {
                label: this.$t('editor.blocks.cta.newwindow.label'),
                type: "toggle",
                icon: "open",
            }
        };
      }
    },
  
    // block methods
    methods: {
      // the block must be focusable somehow
      // In this case we focus on the input.
      focus() {
        this.$refs.input.focus();
      },
      // The input event is sent to the editor
      // to update the block content
      onInput(event) {
        this.$emit("input", {
          content: event.target.value
        });
      },
      openSettings() {
        this.$refs.settings.open();
      },

      input(data) {
        this.$emit("input", {
            attrs: {
                ...this.attrs,
                ...data,
            }
        });
      },

      saveSettings() {
        this.$refs.settings.close();
        this.input(this.attrs);
        this.$events.$emit("model.update");
      }
    },

    template: `
    <template>
    <div>
      <a>
      <div class="k-editor-cta-block-wrapper">
        <input type="text" ref="input" :value="content" @input="onInput" placeholder="Your button text">
        </input>
        <k-button icon="open" @click="openSettings"></k-button>
        </div></a>
        <k-dialog ref="settings" @submit="saveSettings" size="medium">
          <k-form :fields="fields" v-model="attrs" @submit="saveSettings" />
        </k-dialog>
  
      </div>
    </template>
    `,
  });
  
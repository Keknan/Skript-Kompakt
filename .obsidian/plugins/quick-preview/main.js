/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => QuickPreviewPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");
var import_obsidian6 = require("obsidian");

// node_modules/monkey-around/mjs/index.js
function around(obj, factories) {
  const removers = Object.keys(factories).map((key) => around1(obj, key, factories[key]));
  return removers.length === 1 ? removers[0] : function() {
    removers.forEach((r) => r());
  };
}
function around1(obj, method, createWrapper) {
  const original = obj[method], hadOwn = obj.hasOwnProperty(method);
  let current = createWrapper(original);
  if (original)
    Object.setPrototypeOf(current, original);
  Object.setPrototypeOf(wrapper, current);
  obj[method] = wrapper;
  return remove;
  function wrapper(...args) {
    if (current === original && obj[method] === wrapper)
      remove();
    return current.apply(this, args);
  }
  function remove() {
    if (obj[method] === wrapper) {
      if (hadOwn)
        obj[method] = original;
      else
        delete obj[method];
    }
    if (current === original)
      return;
    current = original;
    Object.setPrototypeOf(wrapper, original || Function);
  }
}

// src/settings.ts
var import_obsidian2 = require("obsidian");

// src/utils.ts
var import_obsidian = require("obsidian");
function getModifierNameInPlatform(mod) {
  if (mod === "Mod") {
    return import_obsidian.Platform.isMacOS || import_obsidian.Platform.isIosApp ? "Command" : "Ctrl";
  }
  if (mod === "Shift") {
    return "Shift";
  }
  if (mod === "Alt") {
    return import_obsidian.Platform.isMacOS || import_obsidian.Platform.isIosApp ? "Option" : "Alt";
  }
  if (mod === "Meta") {
    return import_obsidian.Platform.isMacOS || import_obsidian.Platform.isIosApp ? "Command" : import_obsidian.Platform.isWin ? "Win" : "Meta";
  }
  return "Ctrl";
}
function getSelectedItem(suggestions) {
  return suggestions.values[suggestions.selectedItem];
}

// src/settings.ts
var POSITIONS = ["Auto", "Top left", "Top right", "Bottom left", "Bottom right", "Custom"];
var DEFAULT_SETTINGS = {
  modifier: "Alt",
  lazyHide: true,
  position: "Auto",
  customPositionX: 0,
  customPositionY: 0,
  stickToMouse: true,
  log: false,
  disableCloseSuggest: false
};
var QuickPreviewSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
  }
  addTextSetting(settingName) {
    return new import_obsidian2.Setting(this.containerEl).addText((text) => {
      text.setValue(this.plugin.settings[settingName]).setPlaceholder(DEFAULT_SETTINGS[settingName]).onChange(async (value) => {
        this.plugin.settings[settingName] = value;
        await this.plugin.saveSettings();
      });
    });
  }
  addNumberSetting(settingName) {
    return new import_obsidian2.Setting(this.containerEl).addText((text) => {
      text.setValue("" + this.plugin.settings[settingName]).setPlaceholder("" + DEFAULT_SETTINGS[settingName]).then((text2) => text2.inputEl.type = "number").onChange(async (value) => {
        this.plugin.settings[settingName] = value === "" ? DEFAULT_SETTINGS[settingName] : +value;
        await this.plugin.saveSettings();
      });
    });
  }
  addToggleSetting(settingName, extraOnChange) {
    return new import_obsidian2.Setting(this.containerEl).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings[settingName]).onChange(async (value) => {
        this.plugin.settings[settingName] = value;
        await this.plugin.saveSettings();
        extraOnChange == null ? void 0 : extraOnChange(value);
      });
    });
  }
  addDropdowenSetting(settingName, options, display, extraOnChange) {
    return new import_obsidian2.Setting(this.containerEl).addDropdown((dropdown) => {
      var _a;
      const displayNames = /* @__PURE__ */ new Set();
      for (const option of options) {
        const displayName = (_a = display == null ? void 0 : display(option)) != null ? _a : option;
        if (!displayNames.has(displayName)) {
          dropdown.addOption(option, displayName);
          displayNames.add(displayName);
        }
      }
      dropdown.setValue(this.plugin.settings[settingName]).onChange(async (value) => {
        this.plugin.settings[settingName] = value;
        await this.plugin.saveSettings();
        extraOnChange == null ? void 0 : extraOnChange(value);
      });
    });
  }
  addSliderSetting(settingName, min, max, step) {
    return new import_obsidian2.Setting(this.containerEl).addSlider((slider) => {
      slider.setLimits(min, max, step).setValue(this.plugin.settings[settingName]).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings[settingName] = value;
        await this.plugin.saveSettings();
      });
    });
  }
  display() {
    this.containerEl.empty();
    this.addDropdowenSetting("modifier", ["Mod", "Ctrl", "Meta", "Shift", "Alt"], getModifierNameInPlatform).setName("Modifier key to toggle quick preview").setDesc("Hold down this key to preview a suggestion before selecting it.");
    this.addDropdowenSetting("position", POSITIONS, void 0, () => this.display()).setName("Quick preview position").setDesc("Where to show the quick preview.");
    if (this.plugin.settings.position === "Custom") {
      this.addNumberSetting("customPositionX").setName("Custom x coordinate").setDesc("Offset relative to the left edge of the window.");
      this.addNumberSetting("customPositionY").setName("Custom y coordinate").setDesc("Offset relative to the top edge of the window.");
    }
    this.addToggleSetting("stickToMouse").setName("Stick to mouse position").setDesc("If turned on, the preview popover will follow the mouse pointer.");
    this.addToggleSetting("lazyHide").setName("Don't close the current preview until the next preview is ready").setDesc("If turned on, pressing arrow keys or hovering the mouse pointer over a suggestion while holding the modifier key will not immediately close the preview, but instead wait for the preview for the newly selected suggestion to load.");
    new import_obsidian2.Setting(this.containerEl).setName("Debug mode (advanced)").setHeading();
    this.addToggleSetting("log").setName("Show selected suggestion in console");
    this.addToggleSetting("disableCloseSuggest", (disable) => {
      const suggest = this.plugin.getBuiltInSuggest();
      if (!disable && suggest.isOpen)
        suggest.close();
    }).setName("Prevent the suggestion box from closing").setDesc("Useful for inspecting the suggestion box DOM.");
  }
};

// src/popoverManager.ts
var import_obsidian3 = require("obsidian");

// src/hoverParent.ts
var _hoverPopover;
var QuickPreviewHoverParent = class {
  constructor(suggest) {
    this.suggest = suggest;
    __privateAdd(this, _hoverPopover, null);
    this.hidden = false;
    this.manager = this.suggest.popoverManager;
  }
  hide() {
    var _a;
    (_a = this.hoverPopover) == null ? void 0 : _a.hide();
    this.hidden = true;
    if (this.manager.currentOpenHoverParent === this) {
      this.manager.currentOpenHoverParent = null;
    }
  }
  get hoverPopover() {
    return __privateGet(this, _hoverPopover);
  }
  set hoverPopover(hoverPopover) {
    var _a;
    __privateSet(this, _hoverPopover, hoverPopover);
    if (__privateGet(this, _hoverPopover)) {
      this.manager.addChild(__privateGet(this, _hoverPopover));
      (_a = this.manager.currentOpenHoverParent) == null ? void 0 : _a.hide();
      this.manager.currentOpenHoverParent = this;
      if (this.hidden) {
        this.hide();
        return;
      }
      __privateGet(this, _hoverPopover).hoverEl.addClass("quick-preview");
      __privateGet(this, _hoverPopover).position(__privateGet(this, _hoverPopover).shownPos = this.manager.getShownPos());
    }
  }
};
_hoverPopover = new WeakMap();

// src/popoverManager.ts
var PopoverManager = class extends import_obsidian3.Component {
  constructor(plugin, suggest, itemNormalizer) {
    super();
    this.plugin = plugin;
    this.suggest = suggest;
    this.itemNormalizer = itemNormalizer;
    this.currentHoverParent = null;
    this.currentOpenHoverParent = null;
    this.lastEvent = null;
    this.handlers = [];
    this.popoverHeight = null;
    this.popoverWidth = null;
    if (suggest instanceof import_obsidian3.PopoverSuggest)
      this.suggestions = suggest.suggestions;
    else
      this.suggestions = suggest.chooser;
  }
  get doc() {
    return this.suggestions.containerEl.doc;
  }
  get win() {
    return this.doc.win;
  }
  onload() {
    this.registerDomEvent(this.win, "keydown", (event) => {
      if (this.suggest.isOpen && import_obsidian3.Keymap.isModifier(event, this.plugin.settings.modifier)) {
        if (this.currentOpenHoverParent)
          this.hide();
        else {
          const item = getSelectedItem(this.suggestions);
          if (item)
            this.spawnPreview(item);
        }
      }
    });
    this.registerDomEvent(this.win, "keyup", (event) => {
      if (event.key === this.plugin.settings.modifier)
        this.hide();
    });
    this.registerDomEvent(this.win, "mousemove", (event) => {
      if (!import_obsidian3.Keymap.isModifier(event, this.plugin.settings.modifier))
        this.hide();
    });
    this.handlers.push(
      this.suggest.scope.register([this.plugin.settings.modifier], "ArrowUp", (event) => {
        this.suggestions.moveUp(event);
        return false;
      }),
      this.suggest.scope.register([this.plugin.settings.modifier], "ArrowDown", (event) => {
        this.suggestions.moveDown(event);
        return false;
      })
    );
  }
  onunload() {
    var _a, _b;
    this.handlers.forEach((handler) => {
      this.suggest.scope.unregister(handler);
    });
    this.handlers.length = 0;
    (_a = this.currentHoverParent) == null ? void 0 : _a.hide();
    this.currentHoverParent = null;
    (_b = this.currentOpenHoverParent) == null ? void 0 : _b.hide();
    this.currentOpenHoverParent = null;
    this.lastEvent = null;
  }
  hide(lazy = false) {
    var _a;
    if (!lazy)
      (_a = this.currentHoverParent) == null ? void 0 : _a.hide();
    this.currentHoverParent = null;
  }
  spawnPreview(item, lazyHide = false, event = null) {
    this.hide(lazyHide);
    if (event && (event.instanceOf(MouseEvent) || event.instanceOf(PointerEvent)))
      this.lastEvent = event;
    this.currentHoverParent = new QuickPreviewHoverParent(this.suggest);
    const info = this.itemNormalizer(item);
    if (info)
      this.plugin.onLinkHover(this.currentHoverParent, this.doc.body, info.linktext, info.sourcePath, { scroll: info.line });
  }
  getShownPos() {
    if (this.plugin.settings.stickToMouse && this.lastEvent)
      return { x: this.lastEvent.clientX, y: this.lastEvent.clientY };
    const position = this.plugin.settings.position;
    if (position === "Auto") {
      return this.getShownPosAuto();
    } else if (position === "Custom") {
      return { x: this.plugin.settings.customPositionX, y: this.plugin.settings.customPositionY };
    }
    return this.getShownPosCorner(position);
  }
  getShownPosCorner(position) {
    if (position === "Top left") {
      return { x: 0, y: 0 };
    } else if (position === "Top right") {
      return { x: this.win.innerWidth, y: 0 };
    } else if (position === "Bottom left") {
      return { x: 0, y: this.win.innerHeight };
    }
    return { x: this.win.innerWidth, y: this.win.innerHeight };
  }
  getShownPosAuto() {
    var _a, _b, _c, _d, _e;
    const el = this.suggestions.containerEl;
    const { top, bottom, left, right, width, height } = el.getBoundingClientRect();
    const popover = (_a = this.currentHoverParent) == null ? void 0 : _a.hoverPopover;
    this.popoverWidth = (_c = (_b = popover == null ? void 0 : popover.hoverEl.offsetWidth) != null ? _b : this.popoverWidth) != null ? _c : null;
    this.popoverHeight = (_e = (_d = popover == null ? void 0 : popover.hoverEl.offsetHeight) != null ? _d : this.popoverHeight) != null ? _e : null;
    if (this.popoverWidth && this.popoverHeight) {
      let offsetX = width * 0.1;
      let offsetY = height * 0.1;
      if (right - offsetX + this.popoverWidth < this.win.innerWidth)
        return { x: right - offsetX, y: top + offsetY };
      offsetX = width * 0.03;
      offsetY = height * 0.05;
      if (left > this.popoverWidth + offsetX)
        return { x: left - this.popoverWidth - offsetX, y: top + offsetY };
    }
    const x = (left + right) * 0.5;
    const y = (top + bottom) * 0.5;
    if (x >= this.win.innerWidth * 0.6) {
      if (y >= this.win.innerHeight * 0.5)
        return this.getShownPosCorner("Top left");
      return this.getShownPosCorner("Bottom left");
    }
    if (y >= this.win.innerHeight * 0.5)
      return this.getShownPosCorner("Top right");
    return this.getShownPosCorner("Bottom right");
  }
};

// src/reload.ts
var import_obsidian4 = require("obsidian");
var ReloadModal = class extends import_obsidian4.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    this.titleEl.setText("Quick Preview");
    this.contentEl.setText("You need to reload the app to be able to use this plugin together with Hover Editor.");
    new import_obsidian4.Setting(this.contentEl).addButton((button) => {
      button.setButtonText("Reload").setCta().onClick(() => this.app.commands.executeCommandById("app:reload"));
    }).addButton((button) => {
      button.setButtonText("Not now").onClick(() => this.close());
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/main.ts
var _originalOnLinkHover;
var QuickPreviewPlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    __privateAdd(this, _originalOnLinkHover, void 0);
  }
  async onload() {
    if (this.app.workspace.layoutReady && this.app.plugins.enabledPlugins.has("obsidian-hover-editor")) {
      new ReloadModal(this.app).open();
    }
    __privateSet(this, _originalOnLinkHover, this.app.internalPlugins.getPluginById("page-preview").instance.onLinkHover);
    await this.loadSettings();
    await this.saveSettings();
    this.addSettingTab(new QuickPreviewSettingTab(this));
    this.app.workspace.onLayoutReady(() => {
      this.patchSetSelectedItem();
      this.patchSuggester(this.getBuiltInSuggest().constructor, (item) => {
        if (!item.file)
          return null;
        const info = { linktext: item.file.path, sourcePath: "" };
        if (item.type === "heading")
          info.linktext += "#" + (0, import_obsidian5.stripHeadingForLink)(item.heading);
        else if (item.type === "block")
          info.line = item.node.position.start.line;
        return info;
      });
      const quickSwitcherConstructor = this.app.internalPlugins.getPluginById("switcher").instance.QuickSwitcherModal;
      const generalFileSuggestConstructor = Object.getPrototypeOf(quickSwitcherConstructor);
      this.patchSuggester(
        generalFileSuggestConstructor,
        (item) => {
          var _a;
          if (!item.file)
            return null;
          const info = { linktext: item.file.path, sourcePath: "" };
          if (item.type === "headingsList")
            info.linktext += "#" + (0, import_obsidian5.stripHeadingForLink)(item.item.heading);
          else if (item.type === "symbolList")
            info.line = item.item.symbol.position.start.line;
          else if (item.type === "bookmark" && item.item.type === "file")
            info.linktext = item.item.path + ((_a = item.item.subpath) != null ? _a : "");
          return info;
        }
      );
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /** Call the core Page Preview plugin's (potentially) original onLinkHover method. */
  onLinkHover(hoverParent, targetEl, linktext, sourcePath, state) {
    const self = this.app.internalPlugins.getPluginById("page-preview").instance;
    return __privateGet(this, _originalOnLinkHover).call(self, hoverParent, targetEl, linktext, sourcePath, state);
  }
  getBuiltInSuggest() {
    return this.app.workspace.editorSuggest.suggests[0];
  }
  patchSetSelectedItem() {
    const plugin = this;
    const suggest = this.getBuiltInSuggest();
    this.register(around(suggest.suggestions.constructor.prototype, {
      setSelectedItem(old) {
        return function(index, event) {
          old.call(this, index, event);
          if (this.chooser.popoverManager instanceof PopoverManager) {
            const manager = this.chooser.popoverManager;
            if (plugin.settings.log)
              console.log(getSelectedItem(this));
            if (event && import_obsidian6.Keymap.isModifier(event, plugin.settings.modifier)) {
              const item = getSelectedItem(this);
              if (item)
                manager.spawnPreview(item, plugin.settings.lazyHide, event);
            }
          }
        };
      }
    }));
  }
  patchSuggester(suggestClass, itemNormalizer) {
    const prototype = suggestClass.prototype;
    const plugin = this;
    const uninstaller = around(prototype, {
      open(old) {
        return function() {
          old.call(this);
          if (!this.popoverManager)
            this.popoverManager = new PopoverManager(plugin, this, itemNormalizer);
          this.popoverManager.load();
        };
      },
      close(old) {
        return function() {
          var _a;
          if (plugin.settings.disableCloseSuggest)
            return;
          old.call(this);
          (_a = this.popoverManager) == null ? void 0 : _a.unload();
        };
      }
    });
    this.register(uninstaller);
    return uninstaller;
  }
};
_originalOnLinkHover = new WeakMap();

/* nosourcemap */
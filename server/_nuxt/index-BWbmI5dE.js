import { defineComponent, resolveComponent, mergeProps, unref, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { defineStore } from "pinia";
const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(text) {
      if (text.trim()) {
        this.tasks.push({ id: Date.now(), text, completed: false });
      }
    },
    toggleTask(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.completed = !task.completed;
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskList",
  __ssrInlineRender: true,
  setup(__props) {
    const taskStore = useTaskStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "task-list" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(taskStore).tasks, (task) => {
        _push(`<li class="task-item"><span class="${ssrRenderClass({ completed: task.completed })}">${ssrInterpolate(task.text)}</span><div class="task-actions"><button${ssrRenderAttr("aria-label", task.completed ? "Marcar como pendiente" : "Marcar como completada")}>`);
        _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: ["fas", "check"] }, null, _parent));
        _push(`<span class="sr-only">${ssrInterpolate(task.completed ? "Marcar como pendiente" : "Marcar como completada")}</span></button><button aria-label="Eliminar tarea">`);
        _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: ["fas", "trash"] }, null, _parent));
        _push(`<span class="sr-only">Eliminar tarea</span></button></div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useTaskStore();
    const newTask = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      const _component_TaskList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>Lista de Tareas</h1><div class="task-input"><input${ssrRenderAttr("value", newTask.value)} placeholder="Nueva tarea"><button aria-label="Agregar tarea">`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: ["fas", "plus"] }, null, _parent));
      _push(`<span class="sr-only">Agregar tarea</span></button></div>`);
      _push(ssrRenderComponent(_component_TaskList, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BWbmI5dE.js.map

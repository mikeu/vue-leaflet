import { props as gridLayerProps, setup as gridLayerSetup } from "./gridLayer";

export const props = {
  ...gridLayerProps,
  tms: {
    type: Boolean,
    default: false,
  },
  subdomains: {
    type: String,
    default: "abc",
  },
  detectRetina: {
    type: Boolean,
    default: false,
  },
};

export const setup = (props, mapRef) => {
  const {
    options: gridLayerOptions,
    methods: gridLayerMethods,
  } = gridLayerSetup(props, mapRef);
  const options = {
    ...gridLayerOptions,
    tms: props.tms,
    subdomains: props.subdomains,
    detectRetina: props.detectRetina,
  };
  return {
    options,
    methods: {
      ...gridLayerMethods,
    },
  };
};

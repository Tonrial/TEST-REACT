// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a6DipB8QpCpKA67GUeQ1zH
// Component: HAxYssxr6o1S

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: a6DipB8QpCpKA67GUeQ1zH/projectcss
import sty from "./PlasmicRatings.module.css"; // plasmic-import: HAxYssxr6o1S/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: bfbry6x0G5k-/icon

createPlasmicElementProxy;

export type PlasmicRatings__VariantMembers = {
  stars: "zero" | "one" | "two" | "three" | "four" | "five";
};
export type PlasmicRatings__VariantsArgs = {
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
};
type VariantPropType = keyof PlasmicRatings__VariantsArgs;
export const PlasmicRatings__VariantProps = new Array<VariantPropType>("stars");

export type PlasmicRatings__ArgsType = {
  numReviews?: React.ReactNode;
};
type ArgPropType = keyof PlasmicRatings__ArgsType;
export const PlasmicRatings__ArgProps = new Array<ArgPropType>("numReviews");

export type PlasmicRatings__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultRatingsProps {
  numReviews?: React.ReactNode;
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
  className?: string;
}

const $$ = {};

function PlasmicRatings__RenderFunc(props: {
  variants: PlasmicRatings__VariantsArgs;
  args: PlasmicRatings__ArgsType;
  overrides: PlasmicRatings__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "stars",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.stars
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootstars_five]: hasVariant($state, "stars", "five"),
          [sty.rootstars_four]: hasVariant($state, "stars", "four"),
          [sty.rootstars_one]: hasVariant($state, "stars", "one"),
          [sty.rootstars_three]: hasVariant($state, "stars", "three"),
          [sty.rootstars_two]: hasVariant($state, "stars", "two"),
          [sty.rootstars_zero]: hasVariant($state, "stars", "zero")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <StarIcon
          className={classNames(projectcss.all, sty.svg__efYp, {
            [sty.svgstars_five__efYp1YZW]: hasVariant($state, "stars", "five"),
            [sty.svgstars_zero__efYpRbOYu]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__mysFl, {
            [sty.svgstars_five__mysFl1YZW]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four__mysFlQNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__mysFlZhh0D]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__mysFlGpXw]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__mysFlJe5Dz]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__mysFlRbOYu]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__cn5Yq, {
            [sty.svgstars_five__cn5Yq1YZW]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four__cn5YqQNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__cn5YqZhh0D]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__cn5YqGpXw]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__cn5YqJe5Dz]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__cn5YqRbOYu]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg___1Pf0B, {
            [sty.svgstars_five___1Pf0B1YZW]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four___1Pf0BQNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one___1Pf0BZhh0D]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three___1Pf0BGpXw]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two___1Pf0BJe5Dz]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero___1Pf0BRbOYu]: hasVariant(
              $state,
              "stars",
              "zero"
            )
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__fNsjU, {
            [sty.svgstars_five__fNsjU1YZW]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four__fNsjUqNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__fNsjUZhh0D]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__fNsjUGpXw]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__fNsjUJe5Dz]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__fNsjURbOYu]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__mZum9, {
            [sty.svgstars_five__mZum91YZW]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four__mZum9QNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__mZum9Zhh0D]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__mZum9GpXw]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__mZum9Je5Dz]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__mZum9RbOYu]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg___57Ku, {
            [sty.svgstars_five___57Ku1YZW]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four___57KuqNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_three___57KuGpXw]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two___57KuJe5Dz]: hasVariant($state, "stars", "two")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__sOw4Q, {
            [sty.svgstars_five__sOw4Q1YZW]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four__sOw4QQNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_three__sOw4QGpXw]: hasVariant(
              $state,
              "stars",
              "three"
            )
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg___8Qnhh, {
            [sty.svgstars_five___8Qnhh1YZW]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four___8QnhhQNcSz]: hasVariant(
              $state,
              "stars",
              "four"
            )
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__jcxJc, {
            [sty.svgstars_five__jcxJc1YZW]: hasVariant($state, "stars", "five")
          })}
          role={"img"}
        />
      </Stack__>
      {renderPlasmicSlot({
        defaultContents: "(45 Review)",
        value: args.numReviews,
        className: classNames(sty.slotTargetNumReviews)
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRatings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRatings__VariantsArgs;
    args?: PlasmicRatings__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRatings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRatings__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRatings__ArgProps,
          internalVariantPropNames: PlasmicRatings__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRatings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatings";
  } else {
    func.displayName = `PlasmicRatings.${nodeName}`;
  }
  return func;
}

export const PlasmicRatings = Object.assign(
  // Top-level PlasmicRatings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicRatings
    internalVariantProps: PlasmicRatings__VariantProps,
    internalArgProps: PlasmicRatings__ArgProps
  }
);

export default PlasmicRatings;
/* prettier-ignore-end */

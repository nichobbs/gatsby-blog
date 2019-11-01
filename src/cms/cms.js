import CMS from "netlify-cms-app";
import { Col2, Col2Preview } from "../components/col2";
import { PageConfigurator, PageConfiguratorPreview } from '../components/pagemaker';
 
/**
 * Register the imported widgets:
 */
console.log(Col2Preview)
CMS.registerWidget('col-2', Col2, Col2Preview);
CMS.registerWidget('pagemaker', PageConfigurator, PageConfiguratorPreview);
import React, { Component } from "react";
import CartDay from "../cart-day";
import { connect } from "react-redux";
import ToolTip from "../tooltip";
import CartTop from "../cart-top";
import WrapListItem from "../wrap-list-Item";
import { compose } from "../../utils";
import buttonAdd from "../../img/plus.svg";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import AddWl from "../add-wl";
import "./wrap-list.css";
import Timeline from '../timeline';
import {
  worklogAddedToCart,
  worklogRemoved,
  edToEditWorklog,
  worklogCopy,
  worklogDownload,
  worklogFavorite,
} from "../../actions";
import { v4 as uuidv4 } from "uuid";
const WrapList = ({
  favorite,
  worklogList,
  onAddedToCart,
  onDelete,
  onEdit,
  onCopy,
  onDownload,
  onFavorite,
}) => {
  if (favorite) {
    return (
      <div>
        {worklogList.map((wl, index) => (
          <div   key={uuidv4()}>
            <WrapListItem
              id={wl.id}
              worklog={wl}
              onDelete={() => onDelete(wl.id)}
              onEdit={() => onEdit(wl.id)}
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      {Object.keys(worklogList).map((day, index) => (
        <div className="wrap-list" key={index}>
          <CartTop day={day} />
          <CartDay day={day} worklogList={worklogList} />
        </div>
      ))}
    </div>
  );
};

class WrapListContainer extends Component {
  render() {
    const {
      worklogList,
      loading,
      error,
      modalIsOpen,
      onAddedToCart,
      onDelete,
      onEdit,
      onCopy,
      onDownload,
      onFavorite,
      showFavoriteList,
      favorites,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }
    if (modalIsOpen) {
      return (
        <div>
          <WrapList worklogList={worklogList} />
          <AddWl />
        </div>
      );
    }

    if (showFavoriteList) {
      if (favorites.length < 1) {
        return (
          <div>
            <div className="empty">There is no favorite issues yet</div>
            <div className="">
              <div className="add">
                <img
                  src={buttonAdd}
                  alt="icon"
                  // onClick={onShowModal}
                />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <WrapList
              // key={uuidv4()}
              worklogList={favorites}
              favorite={true}
              onAddedToCart={onAddedToCart}
              onDelete={onDelete}
              onEdit={onEdit}
              onCopy={onCopy}
              onDownload={onDownload}
              onFavorite={onFavorite}
            />
          </div>
        );
      }
    }
    return (
      <div>
        {/* <CartTop /> */}
        <ToolTip />
        <WrapList
          worklogList={worklogList}
          onAddedToCart={onAddedToCart}
          onDelete={onDelete}
          onEdit={onEdit}
          onCopy={onCopy}
          onDownload={onDownload}
          onFavorite={onFavorite}
        />
    
      </div>
    );
  }
}

const mapStateToProps = ({
  worklogList,
  worklogs,
  seconds,
  loading,
  error,
  showFavoriteList,
  favorites,
  modalIsOpen,
}) => {
  return {
    worklogList,
    worklogs,
    seconds,
    loading,
    error,
    modalIsOpen,
    showFavoriteList,
    favorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddedToCart: (id) => dispatch(worklogAddedToCart(id)),
    onDelete: (id, data) => dispatch(worklogRemoved(id, data)),
    onCopy: (id, data, worklogDate) =>
      dispatch(worklogCopy(id, data, worklogDate)),
    onDownload: (id) => dispatch(worklogDownload(id)),
    onFavorite: (id, data) => dispatch(worklogFavorite(id, data)),
    onEdit: (id, data) => dispatch(edToEditWorklog(id, data)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  WrapListContainer
);
